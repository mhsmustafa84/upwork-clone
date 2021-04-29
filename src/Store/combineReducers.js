import { combineReducers } from 'redux';
import { SignUpReducer } from './reducers/signUp';
import { userDataReducer } from './reducers/userDataReducer';

export default combineReducers({
    //The Key is your type;
    //the value is reducer you will import
    // count:counterReducer,import { SignUpReducer } from './reducers/signUp';

    signUpData: SignUpReducer,
    userData: userDataReducer

})