import shortid from 'shortid';

const ROW = 'row';
const COLUMN = 'column';
const COMPONENT = 'component';

const SIDEBAR_ITEM = 'sidebarItem';
const SIDEBAR_ITEMS = [
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
			content: 'Layout Column',
		},
	},
];

export { ROW, COLUMN, COMPONENT, SIDEBAR_ITEM, SIDEBAR_ITEMS };
