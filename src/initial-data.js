import { COMPONENT, ROW, COLUMN } from './constants';

// layout mapping is shown on the initial page layout
const initialData = {
	layout: [
		{
			type: ROW,
			id: 'row0',
			children: [
				{
					type: COLUMN,
					id: 'column0',
					children: [
						{
							type: COMPONENT,
							id: 'component0',
						},
						{
							type: COMPONENT,
							id: 'component1',
						},
					],
				},
				{
					type: COLUMN,
					id: 'column1',
					children: [
						{
							type: COMPONENT,
							id: 'component2',
						},
					],
				},
			],
		},
		{
			type: ROW,
			id: 'row1',
			children: [
				{
					type: COLUMN,
					id: 'column2',
					children: [
						{
							type: COMPONENT,
							id: 'component3',
						},
					],
				},
			],
		},
	],
	components: {
		component0: {
			id: 'component0',
			type: 'input',
			content: 'Input Element',
		},
		component1: {
			id: 'component1',
			type: 'image',
			content: 'Image Element',
		},
		component2: {
			id: 'component2',
			type: 'email',
			content: 'Email Element',
		},
		component3: { id: 'component3', type: 'name', content: 'Name Element' },
	},
};

export default initialData;
