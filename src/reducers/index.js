import { combineReducers } from 'redux';
import {reducer as form} from "redux-form";
import Auth from "./authReducer";

const rootReducer = combineReducers({
  form,
  auth: Auth
});

export default rootReducer;
