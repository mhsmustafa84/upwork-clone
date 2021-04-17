import { combineReducers } from 'redux';
import { changeLayoutReducer } from './reducers/changeLayoutReducer';

export default combineReducers({
    //The Key is your type;
    //the value is reducer you will import
    // count:counterReducer,
    layOut: changeLayoutReducer

})