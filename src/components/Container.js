import React from 'react';
import { SIDEBAR_ITEMS, SIDEBAR_ITEM, COMPONENT, COLUMN } from './Constants';
import SidebarItem from './SidebarItem';
const Container = () => {
	return (
		<div className='pageWrapper'>
			<div className='sideBar'>
				{SIDEBAR_ITEMS?.map((sideBarItem, index) => (
					<SidebarItem key={sideBarItem.id} data={sideBarItem} />
				))}
			</div>
			<div className='pageContainer'>
				<div className='page'>
					<h1>Layout Here</h1>
				</div>
			</div>
		</div>
	);
};

export default Container;
