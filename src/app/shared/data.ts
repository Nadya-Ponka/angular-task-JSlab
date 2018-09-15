export let items = [
	{ id: 0, size: ['s', 'm', 'l'], colors: ['green', 'red', 'yellow'], image: 't-shirt', name: 'T-shirt', price: 5, whose: 'men' },
	{ id: 1, size: ['10Litry'], colors: ['green', 'red', 'yellow'], image: 'backpack', name: 'backpack', price: 5.95, whose: 'men' },
	{ id: 2, size: ['M', 'XL', 'XXL'], colors: ['grey', 'blue'], image: 't-shirt-1', name: 'T-shirt', price: 19.95, whose: 'women' },
	{ id: 3, size: ['s', 'm', 'l'], colors: ['turquois', 'red', 'yellow'], image: 'jacket', name: 'jacket', price: 51, whose: 'women' },
	{ id: 4, size: ['s', 'm', 'l'], colors: ['green', 'red', 'yellow'], image: 'pants', name: 'pants', price: 12, whose: 'children' },
	{ id: 5, size: ['s', 'l'], colors: ['green', 'yellow'], image: 't-shirt', name: 'T-shirt', price: 9.5, whose: 'men' },
	{ id: 6, size: ['s', 'm', 'l'], colors: ['green', 'red', 'pink'], image: 't-shirt', name: 'T-shirt', price: 5, whose: 'children' },
	{ id: 7, size: ['m', 'l'], colors: ['violet', 'pink'], image: 't-shirt', name: 'T-shirt', price: 7.65, whose: 'men' },
	{ id: 8, size: ['s', 'm', 'l'], colors: ['green', 'red', 'yellow'], image: 'pants', name: 'pants', price: 6, whose: 'men' },
	{ id: 9, size: ['36', '37', '38', '39'], colors: ['black', 'red'], image: 'trekking-shoes', name: 'trekking-shoes', price: 75, whose: 'women' },
	{ id: 10, size: ['s', 'm', 'l'], colors: ['green', 'red', 'yellow'], image: 'pants', name: 'pants', price: 8, whose: 'children' },
	{ id: 11, size: ['s', 'm', 'l'], colors: ['green', 'red', 'yellow'], image: 'pants', name: 'skirt', price: 5, whose: 'children' },
	{ id: 12, size: ['s', 'm', 'l'], colors: ['green', 'red', 'yellow'], image: 't-shirt', name: 'T-shirt', price: 5, whose: 'men' },
	{ id: 13, size: ['39', '40', '41', '42'], colors: ['grey', 'brown'], image: 'trekking-shoes', name: 'trekking-shoes', price: 80, whose: 'men' },
	{ id: 14, size: ['s', 'm', 'l'], colors: ['green', 'yellow'], image: 't-shirt', name: 'T-shirt', price: 19.99, whose: 'men' },
];

export let filters = [
	{
		category: 'men',
		selected: true
	},
	{
		category: 'women',
		selected: true
	},
	{
		category: 'children',
		selected: true
	},
]

export let sortBy = ['price', 'name'];
