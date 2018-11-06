import { combineReducers } from "redux";
import toggleMobileMenu from "./toggleMobileMenu";
import admins from "./admins";
import investors from "./investors";
import reports from "./reports";
import articles from "./articles";
import portal from "./portal";
import adminHomePageData from "./adminHomePageData";
import authData from "./authData";
import course from "./course";
import courseHistory from "./courseHistory";

export default combineReducers({
  adminHomePageData,
  toggleMobileMenu,
  admins,
  investors,
  reports,
  articles,
  portal,
  authData,
  course,
  courseHistory
});
