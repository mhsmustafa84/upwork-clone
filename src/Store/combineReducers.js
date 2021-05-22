import { combineReducers } from "redux";
import { SignUpReducer } from "./reducers/signUp";
import { talentDataReducer } from "./reducers/talentDataReducer";
import { clientDataReducer } from "./reducers/clientDataReducer";
import { jobsDataReducer } from "./reducers/jobsDataReducer";
import { jobDetailsReducer } from "./reducers/jobDetailsReducer";
import { langReducer } from "./reducers/langReducer";

export default combineReducers({
  //The Key is your type;
  //the value is reducer you will import
  // count:counterReducer,import { SignUpReducer } from './reducers/signUp';

  signUpData: SignUpReducer,
  talentData: talentDataReducer,
  clientData: clientDataReducer,
  jobsData: jobsDataReducer,
  jobDetails: jobDetailsReducer,
  lang: langReducer,
});
