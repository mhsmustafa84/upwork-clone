import { combineReducers } from 'redux';
import { SignUpReducer } from './reducers/signUp';
import { talentDataReducer } from './reducers/talentDataReducer';
import { clientDataReducer } from './reducers/clientDataReducer';
import { jobsDataReducer } from './reducers/jobsDataReducer';
import { langReducer } from './reducers/langReducer';
import { jobDataReducer } from './reducers/jobDataReducer';


export default combineReducers({
    //The Key is your type;
    //the value is reducer you will import
    // count:counterReducer,import { SignUpReducer } from './reducers/signUp';

    signUpData: SignUpReducer,
    talentData: talentDataReducer,
    clientData: clientDataReducer,
    jobsData: jobsDataReducer,
    lang: langReducer,
    jobData:jobDataReducer,

})