import * as types from '../actions/action-types';

export default (state = [], action) => {
	switch (action.type) {
		case types.ADD_PLACE:
			return [...state, Object.assign({}, action.place)];
		default:
			return state;
	}
};