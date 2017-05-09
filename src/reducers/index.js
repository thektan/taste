import { combineReducers } from 'redux';
import places from './place-reducer';

const rootReducer = combineReducers({
	places
});

export default rootReducer;