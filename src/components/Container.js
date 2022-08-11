import React, { useCallback, useState } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.min.css';

import { SIDEBAR_ITEMS, SIDEBAR_ITEM, COMPONENT, COLUMN } from '../constants';
import SidebarItem from './SidebarItem';
import initialData from '../initial-data';
import DropZone from './DropZone';
import Row from './Row';
import {
	handleMoveSidebarComponentIntoParent,
	handleMoveToDifferentParent,
	handleMoveWithinParent,
	handleRemoveItemFromLayout,
} from '../helpers';
import shortid from 'shortid';
import TrashDropZone from './TrashDopZone';
import ObjectData from './ObjectData';

const Container = () => {
	// Initial page layout state declaration
	const initialLayout = initialData.layout;
	const initialComponents = initialData.components;
	const [layout, setLayout] = useState(initialLayout);
	const [components, setComponents] = useState(initialComponents);
	//Modal state declaration
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [modalText, setModalText] = useState('');

	// Handle drop component
	const handleDrop = useCallback(
		(dropZone, item) => {
			const splitDropZonePath = dropZone.path.split('-');
			const pathToDropZone = splitDropZonePath.slice(0, -1).join('-');

			const newItem = { id: item.id, type: item.type };
			if (item.type === COLUMN) {
				newItem.children = item.children;
			}

			// sidebar into
			if (item.type === SIDEBAR_ITEM) {
				// 1. Move sidebar item into page
				const newComponent = {
					id: shortid.generate(),
					...item.component,
				};
				const newItem = {
					id: newComponent.id,
					type: COMPONENT,
				};
				setComponents({
					...components,
					[newComponent.id]: newComponent,
				});
				setLayout(
					handleMoveSidebarComponentIntoParent(
						layout,
						splitDropZonePath,
						newItem
					)
				);
				return;
			}

			// move down here since sidebar items don't have path
			const splitItemPath = item.path.split('-');
			const pathToItem = splitItemPath.slice(0, -1).join('-');

			// 2. Pure move (no create)
			if (splitItemPath.length === splitDropZonePath.length) {
				// 2.a. move within parent
				if (pathToItem === pathToDropZone) {
					setLayout(
						handleMoveWithinParent(
							layout,
							splitDropZonePath,
							splitItemPath
						)
					);
					return;
				}

				// 2.b. move different parent

				setLayout(
					handleMoveToDifferentParent(
						layout,
						splitDropZonePath,
						splitItemPath,
						newItem
					)
				);
				return;
			}

			// 3. Move + Create
			setLayout(
				handleMoveToDifferentParent(
					layout,
					splitDropZonePath,
					splitItemPath,
					newItem
				)
			);
		},
		[layout, components]
	);
	// Handle row component
	const renderRow = (row, currentPath) => {
		return (
			<Row
				key={row.id}
				data={row}
				handleDrop={handleDrop}
				components={components}
				path={currentPath}
			/>
		);
	};
	// Handle drop trash bin
	const handleDropToTrashBin = useCallback(
		(dropZone, item) => {
			const splitItemPath = item.path.split('-');
			setLayout(handleRemoveItemFromLayout(layout, splitItemPath));
		},
		[layout]
	);

	//Handle item id and show id popup modal
	const handleId = (e) => {
		let id = e.target.id;
		if (id) {
			setIsModalVisible(true);
			setModalText(`Item id: ${id}`);
		}
	};

	// Modal handler
	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div className='pageWrapper'>
			{/* Sidebar component */}
			<div className='sideBar'>
				{SIDEBAR_ITEMS?.map((sideBarItem, index) => (
					<SidebarItem key={sideBarItem.id} data={sideBarItem} />
				))}
			</div>
			{/* Page layout container */}
			{
				<div className='pageContainer'>
					<div className='page' onClick={handleId}>
						{layout.map((row, index) => {
							const currentPath = `${index}`;
							return (
								<div key={row.id}>
									{/* row dropZone component*/}
									<DropZone
										data={{
											path: currentPath,
											childrenCount: layout.length,
										}}
										onDrop={handleDrop}
										path={currentPath}
									/>
									{renderRow(row, currentPath)}
								</div>
							);
						})}
						{/* checked last dropZone component*/}
						<DropZone
							data={{
								path: `${layout.length}`,
								childrenCount: layout.length,
							}}
							onDrop={handleDrop}
							isLast
						/>
					</div>
					{/* Trash dropzone component */}
					<TrashDropZone
						data={{
							layout,
						}}
						onDrop={handleDropToTrashBin}
					/>

					<ObjectData objectData={layout} />
					{/* Popup modal */}
					<Modal
						title='Item Clicked'
						centered
						visible={isModalVisible}
						onOk={handleOk}
						onCancel={handleCancel}
					>
						<p>{modalText}</p>
					</Modal>
				</div>
			}
		</div>
	);
};

export default Container;
