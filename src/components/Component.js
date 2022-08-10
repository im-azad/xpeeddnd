import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { COMPONENT } from '../constants';

const style = {
	cursor: 'move',
};
const Component = ({ data, components, path }) => {
	const ref = useRef(null);

	const [{ isDragging }, drag] = useDrag({
		item: { id: data.id, path },
		type: COMPONENT,
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const opacity = isDragging ? 0 : 1;
	drag(ref);

	const component = components[data.id];

	return (
		<div
			ref={ref}
			style={{ ...style, opacity }}
			className='component draggable'
		>
			<p className='componentContent'>{component?.content}</p>
		</div>
	);
};
export default Component;
