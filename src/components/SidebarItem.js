import { useDrag } from 'react-dnd';

function SideBarItem({ data }) {
	const [collected, drag, dragPreview] = useDrag(() => ({
		type: data.type,
		item: { id: data.id },
		// TODO: Add opacity functionality while dragging
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	}));
	return collected.isDragging ? (
		<div ref={dragPreview} />
	) : (
		<div className='sidebarItem' ref={drag} style={{ ...collected }}>
			{data.component.type}
		</div>
	);
}
export default SideBarItem;
