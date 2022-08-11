import React from 'react';
import { useDrag } from 'react-dnd';

const SidebarItem = ({ data }) => {
	// sidebarItem drag source useDrag hook
	// type and item required.type must be either a string or a symbol and item should be object or function

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
			{data?.component?.type}
		</div>
	);
};

export default SidebarItem;
