import {Map} from 'immutable';
import { CREATE } from '../actions/place';

const placeReducer = (state = Map(), action) => {
	switch (action.type) {
		case CREATE:
			return state.mergeIn([action.data.id], action.data);
		default:
			return state;
	}
};

export default placeReducer;