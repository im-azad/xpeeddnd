import React from 'react';
import { useDrag } from 'react-dnd';

const SidebarItem = ({ data }) => {
	const [collected, drag, dragPreview] = useDrag(() => ({
		item: data,
		type: data.type,
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.3 : 1,
		}),
	}));
	return collected.isDragging ? (
		<div ref={dragPreview} />
	) : (
		<div className='sidebarItem' ref={drag} style={{ ...collected }}>
			{data.component.type}
		</div>
	);
};

export default SidebarItem;
