import { combineReducers } from 'redux';
import salaryReducer from '../reducers/salaryReducer';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    salaryReducer

});

export default rootReducer;