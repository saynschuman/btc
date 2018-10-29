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
  CHARGE_TABLE_REPORT_RESPONSE,
  REQUEST_REQUEST_APPLICATIONS,
  RESPONSE_REQUEST_APPLICATIONS,
  REQUEST_HISTORY_APPLICATIONS,
  RESPONSE_HISTORY_APPLICATIONS
} from "../constants";
import {
  whoAreYou,
  getAdminsFromServer,
  getInvestorsFromServer,
  getInvestorsReportFromServer,
  getInvestitionsReportFromServer,
  getChargeTableFromServer,
  getRequestApplicationsFromServer,
  getHistoryApplicationsFromServer
} from "../backend/api";

export const checkWhoAreYou = authData => dispatch => {
  dispatch({
    type: REQUEST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(whoAreYou(authData));
    }, 200);
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

export const getInvestors = () => dispatch => {
  dispatch({
    type: INVESTORS_REQUEST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getInvestorsFromServer());
    }, 200);
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
    setTimeout(() => {
      resolve(getInvestorsReportFromServer());
    }, 200);
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
    setTimeout(() => {
      resolve(getInvestitionsReportFromServer());
    }, 200);
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
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: CHARGE_TABLE_REPORT_RESPONSE,
      chargeTable: result
    });
  });
};

export const getRequestApplications = () => dispatch => {
  dispatch({
    type: REQUEST_REQUEST_APPLICATIONS
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getRequestApplicationsFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_REQUEST_APPLICATIONS,
      requestApplications: result
    });
  });
};

export const getHistoryApplications = () => dispatch => {
  dispatch({
    type: REQUEST_HISTORY_APPLICATIONS
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getHistoryApplicationsFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_HISTORY_APPLICATIONS,
      requestApplications: result
    });
  });
};