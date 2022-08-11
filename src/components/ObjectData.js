import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ObjectData = ({ objectData }) => {
	const [layoutObject, setLayoutObject] = useState([]);
	useEffect(() => {
		setLayoutObject(objectData);
	}, [objectData]);

	return (
		<div>
			<h2>Full Object Data:</h2>
			<div className='layout-data-area'>
				{layoutObject.map(
					(data) => `
				{
					layout:
					[
						type: ${data.type},
						id: ${data.id},
						children: ${data?.children.map(
							(item) => `
							[
								type: ${item.type},
								id: ${item.id},
								children: ${item?.children.map(
									(children) => `
									[
										type: ${children.type},
										id: ${children.id}
									]`
								)},
							]`
						)}
					]
				}
				`
				)}
			</div>
		</div>
	);
};

export default ObjectData;
