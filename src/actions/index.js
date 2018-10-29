import {
  REQUEST,
  RESPONSE,
  SHOW_MOBILE_MENU,
  ADMINS_REQUEST,
  ADMINS_RESPONSE,
  INVESTORS_REQUEST,
  INVESTORS_RESPONSE,
  INVESTORS_REPORT_REQUEST,
  INVESTORS_REPORT_RESPONSE,
  INVESTITIONS_REPORT_REQUEST,
  INVESTITIONS_REPORT_RESPONSE,
  CHARGE_TABLE_REQUEST,
  CHARGE_TABLE_REPORT_RESPONSE
} from "../constants";
import {
  whoAreYou,
  getAdminsFromServer,
  getInvestorsFromServer,
  getInvestorsReportFromServer,
  getInvestitionsReportFromServer,
  getChargeTableFromServer
} from "../backend/api";

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
    // setTimeout(() => {
    resolve(getAdminsFromServer());
    // }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: ADMINS_RESPONSE,
      adminList: result
    });
  });
};

export const getInvestors = () => dispatch => {
  dispatch({
    type: INVESTORS_REQUEST
  });
  const promise = new Promise(resolve => {
    resolve(getInvestorsFromServer());
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: INVESTORS_RESPONSE,
      investorsList: result
    });
  });
};

export const getInvestorsReport = () => dispatch => {
  dispatch({
    type: INVESTORS_REPORT_REQUEST
  });
  const promise = new Promise(resolve => {
    resolve(getInvestorsReportFromServer());
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: INVESTORS_REPORT_RESPONSE,
      investorsReports: result
    });
  });
};

export const getInvestitionsReport = () => dispatch => {
  dispatch({
    type: INVESTITIONS_REPORT_REQUEST
  });
  const promise = new Promise(resolve => {
    resolve(getInvestitionsReportFromServer());
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: INVESTITIONS_REPORT_RESPONSE,
      investitionsReports: result
    });
  });
};

export const getChargeTable = () => dispatch => {
  dispatch({
    type: CHARGE_TABLE_REQUEST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getChargeTableFromServer());
    }, 300);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: CHARGE_TABLE_REPORT_RESPONSE,
      chargeTable: result
    });
  });
};
