import { combineReducers } from "redux";
import authData from "./authData";
import toggleMobileMenu from "./toggleMobileMenu";
import { reducer as form } from "redux-form";
import admins from "./admins";
import investors from "./investors";

export default combineReducers({
  form,
  authData,
  toggleMobileMenu,
  admins,
  investors
});
