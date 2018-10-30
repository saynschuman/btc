import { combineReducers } from "redux";
import authData from "./authData";
import toggleMobileMenu from "./toggleMobileMenu";
import admins from "./admins";
import investors from "./investors";
import reports from "./reports";
import articles from "./articles";
import portal from "./portal";

export default combineReducers({
  authData,
  toggleMobileMenu,
  admins,
  investors,
  reports,
  articles,
  portal
});
