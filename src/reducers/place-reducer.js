import * as types from '../actions/action-types';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_PLACE:
			return [
				...state,
				Object.assign({}, action.place)
			];
		default:
			return state;
	}
};