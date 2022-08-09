import React from 'react';
import { useDrag } from 'react-dnd';

const SidebarItem = ({ data }) => {
	const [collected, drag, dragPreview] = useDrag(() => ({
		type: data.type,
		item: { id: data.id },
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
