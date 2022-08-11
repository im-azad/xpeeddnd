import React from 'react';
import classNames from 'classnames';
import { useDrop } from 'react-dnd';
import { COMPONENT, ROW, COLUMN } from '../constants';

const ACCEPTS = [ROW, COLUMN, COMPONENT];

const TrashDropZone = ({ data, onDrop }) => {
	// DnD useDrop hooks provides drop target
	// accept are required
	const [{ isOver, canDrop }, drop] = useDrop({
		accept: ACCEPTS,
		drop: (item, monitor) => {
			onDrop(data, item);
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	const isActive = isOver && canDrop;
	return (
		<div
			className={classNames('trashDropZone', { active: isActive })}
			ref={drop}
		>
			TRASH
		</div>
	);
};
export default TrashDropZone;
