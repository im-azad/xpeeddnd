export const SIDEBAR_ITEM = 'sidebarItem';
export const ROW = 'row';
export const COLUMN = 'column';
export const COMPONENT = 'component';

export const SIDEBAR_ITEMS = [
	{
		id: '0',
		type: SIDEBAR_ITEM,
		component: {
			type: 'row',
			content: 'Row',
		},
	},
	{
		id: '01',
		type: SIDEBAR_ITEM,
		component: {
			type: 'column',
			content: 'Column',
		},
	},
	{
		id: '1',
		type: SIDEBAR_ITEM,
		component: {
			type: 'input',
			content: 'Some input',
		},
	},
	{
		id: '2',
		type: SIDEBAR_ITEM,
		component: {
			type: 'name',
			content: 'Some name',
		},
	},
	{
		id: '3',
		type: SIDEBAR_ITEM,
		component: {
			type: 'email',
			content: 'Some email',
		},
	},
	{
		id: '4',
		type: SIDEBAR_ITEM,
		component: {
			type: 'phone',
			content: 'Some phone',
		},
	},
	{
		id: '5',
		type: SIDEBAR_ITEM,
		component: {
			type: 'image',
			content: 'Some image',
		},
	},
];
