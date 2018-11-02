import { combineReducers } from "redux";
import toggleMobileMenu from "./toggleMobileMenu";
import admins from "./admins";
import investors from "./investors";
import reports from "./reports";
import articles from "./articles";
import portal from "./portal";
import adminHomePageData from "./adminHomePageData";

export default combineReducers({
  adminHomePageData,
  toggleMobileMenu,
  admins,
  investors,
  reports,
  articles,
  portal
});
