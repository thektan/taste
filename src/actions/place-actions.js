import * as types from './action-types';

export const addPlace = (place) => {
	return {
		type: types.ADD_PLACE,
		place
	};
}