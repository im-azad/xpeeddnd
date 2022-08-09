const SIDEBAR_ITEM = 'sidebarItem';
const ROW = 'row';
const COLUMN = 'column';
const COMPONENT = 'component';

const SIDEBAR_ITEMS = [
	{
		id: '0',
		type: SIDEBAR_ITEM,
		component: {
			type: 'row',
			content: 'Row',
		},
	},
	{
		id: '1',
		type: SIDEBAR_ITEM,
		component: {
			type: 'column',
			content: 'Column',
		},
	},
	{
		id: '2',
		type: SIDEBAR_ITEM,
		component: {
			type: 'input',
			content: 'Some input',
		},
	},
	{
		id: '3',
		type: SIDEBAR_ITEM,
		component: {
			type: 'name',
			content: 'Some name',
		},
	},
	{
		id: '4',
		type: SIDEBAR_ITEM,
		component: {
			type: 'email',
			content: 'Some email',
		},
	},
	{
		id: '5',
		type: SIDEBAR_ITEM,
		component: {
			type: 'phone',
			content: 'Some phone',
		},
	},
	{
		id: '6',
		type: SIDEBAR_ITEM,
		component: {
			type: 'image',
			content: 'Some image',
		},
	},
];

export { SIDEBAR_ITEM, SIDEBAR_ITEMS, ROW, COLUMN, COMPONENT };
