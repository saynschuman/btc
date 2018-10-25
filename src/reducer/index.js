import { combineReducers } from "redux";
import authData from "./authData";
import toggleMobileMenu from "./toggleMobileMenu";
import { reducer as form } from "redux-form";

export default combineReducers({
  form,
  authData,
  toggleMobileMenu
});
