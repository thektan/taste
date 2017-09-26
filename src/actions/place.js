export const CREATE = 'CREATE';

export const create = () => ({
	type: CREATE,
	data: {
		id: 123,
		name: 'test',
	},
});