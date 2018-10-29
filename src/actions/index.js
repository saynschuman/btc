import {
  REQUEST,
  RESPONSE,
  SHOW_MOBILE_MENU,
  ADMINS_REQUEST,
  ADMINS_RESPONSE
} from "../constants";
import { whoAreYou, getAdminsFromServer } from "../backend/api";

export const checkWhoAreYou = authData => dispatch => {
  dispatch({
    type: REQUEST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(whoAreYou(authData));
    }, 1300);
  });

  promise.then(result => {
    localStorage.setItem("user", result);
    return dispatch({
      type: RESPONSE,
      whoIsLogged: result
    });
  });
};

export const toggleMobileMenu = () => {
  return {
    type: SHOW_MOBILE_MENU
  };
};

export const getAdmins = () => dispatch => {
  dispatch({
    type: ADMINS_REQUEST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getAdminsFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: ADMINS_RESPONSE,
      adminList: result
    });
  });
};
