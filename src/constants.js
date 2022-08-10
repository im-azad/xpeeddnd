import shortid from 'shortid';

export const SIDEBAR_ITEM = 'sidebarItem';
export const ROW = 'row';
export const COLUMN = 'column';
export const COMPONENT = 'component';

export const SIDEBAR_ITEMS = [
	{
		id: shortid.generate(),
		type: SIDEBAR_ITEM,
		component: {
			type: 'input',
			content: 'Input Element',
		},
	},
	{
		id: shortid.generate(),
		type: SIDEBAR_ITEM,
		component: {
			type: 'name',
			content: 'Name Element',
		},
	},
	{
		id: shortid.generate(),
		type: SIDEBAR_ITEM,
		component: {
			type: 'email',
			content: 'Email Element',
		},
	},
	{
		id: shortid.generate(),
		type: SIDEBAR_ITEM,
		component: {
			type: 'phone',
			content: 'Phone Element',
		},
	},
	{
		id: shortid.generate(),
		type: SIDEBAR_ITEM,
		component: {
			type: 'image',
			content: 'Image Element',
		},
	},
	{
		id: shortid.generate(),
		type: SIDEBAR_ITEM,
		component: {
			type: 'row',
			content: 'Layout Row',
		},
	},
	{
		id: shortid.generate(),
		type: SIDEBAR_ITEM,
		component: {
			type: 'column',
			content: 'Layout Row',
		},
	},
];
