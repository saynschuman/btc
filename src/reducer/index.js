import { combineReducers } from "redux";
import authData from "./authData";
import { reducer as form } from "redux-form";

export default combineReducers({
  form,
  authData
});
