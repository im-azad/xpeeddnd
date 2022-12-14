import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { COLUMN } from '../constants';
import DropZone from './DropZone';
import Component from './Component';

const style = {};
const Column = ({ data, components, handleDrop, path }) => {
	// react useRef hooks
	const ref = useRef(null);

	// column drag source useDrag hook
	// type and item required.type must be either a string or a symbol and item should be object or function
	const [{ isDragging }, drag] = useDrag({
		type: COLUMN,
		item: {
			id: data.id,
			children: data.children,
			path,
		},

		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const opacity = isDragging ? 0 : 1;
	drag(ref);

	// renderComponent function return component
	const renderComponent = (component, currentPath) => {
		return (
			<Component
				key={component.id}
				data={component}
				components={components}
				path={currentPath}
			/>
		);
	};

	return (
		<div
			ref={ref}
			style={{ ...style, opacity }}
			className='base draggable column'
		>
			<p id={data.id}>Column</p>
			{data.children?.map((component, index) => {
				const currentPath = `${path}-${index}`;

				return (
					<div key={component.id}>
						<DropZone
							data={{
								path: currentPath,
								childrenCount: data.children.length,
							}}
							onDrop={handleDrop}
						/>
						{renderComponent(component, currentPath)}
					</div>
				);
			})}
			<DropZone
				data={{
					path: `${path}-${data.children?.length}`,
					childrenCount: data.children?.length,
				}}
				onDrop={handleDrop}
				isLast
			/>
		</div>
	);
};
export default Column;
