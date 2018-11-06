import {
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
  RESPONSE_HISTORY_APPLICATIONS,
  REQUEST_INVEST_PERIOD,
  RESPONSE_INVEST_PERIOD,
  REQUEST_SCHEMA_SETTINGS,
  RESPONSE_SCHEMA_SETTINGS,
  REQUEST_YIELD_LIST,
  RESPONSE_YIELD_LIST,
  REQEST_ARTICLES_LIST,
  RESPONSE_ARTICLES_LIST,
  REQUEST_PORTAL_NEWS,
  RESPONSE_PORTAL_NEWS,
  REQUEST_HOMEPAGE_DATA,
  RESPONSE_HOMEPAGE_DATA,
  ERROR_HOMEPAGE_DATA,
  AUTH_REQUEST,
  AUTH_RESPONSE,
  AUTH_ERROR,
  GET_CORSE_REQUEST,
  GET_CORSE_RESPONSE
} from "../constants";
import {
  getAdminsFromServer,
  getInvestorsFromServer,
  getInvestorsReportFromServer,
  getInvestitionsReportFromServer,
  getChargeTableFromServer,
  getRequestApplicationsFromServer,
  getHistoryApplicationsFromServer,
  getInvestPeriodFromServer,
  getSchemaSettingsFromServer,
  getYieldListFromServer,
  getArticlesFromServer,
  getPortalNewsFromServer
} from "../backend/api";

export const toggleMobileMenu = () => {
  return {
    type: SHOW_MOBILE_MENU
  };
};

export const authData = data => dispatch => {
  dispatch({
    type: AUTH_REQUEST
  });

  fetch("https://atc-bl.nadzor.online/bl198765/admin/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      login: data.id,
      password: data.password
    })
  })
    .then(res => {
      if (res.status < 400) {
        return dispatch({
          type: AUTH_RESPONSE,
          success: true
        });
      } else {
        return dispatch({
          type: AUTH_ERROR,
          success: false
        });
      }
    })
    .catch(error => {
      console.log(error.status);
      if (error.status < 400) {
        return dispatch({
          type: AUTH_RESPONSE,
          success: true
        });
      } else {
        return dispatch({
          type: AUTH_ERROR,
          success: false
        });
      }
    });
};

export const getHomePageAdminData = () => dispatch => {
  dispatch({
    type: REQUEST_HOMEPAGE_DATA
  });

  fetch("https://atc-bl.nadzor.online/bl198765/admin/platform/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
      return dispatch({
        type: RESPONSE_HOMEPAGE_DATA,
        payload: {
          adminHomePageData: res,
          isError: false
        }
      });
    })
    .catch(error => {
      console.log(error);
      return dispatch({
        type: ERROR_HOMEPAGE_DATA,
        payload: {
          isError: true
        }
      });
    });
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

export const getCourse = () => dispatch => {
  dispatch({
    type: GET_CORSE_REQUEST
  });
  fetch("https://atc-bl.nadzor.online/bl198765/platform/rates")
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => {
      return dispatch({ type: GET_CORSE_RESPONSE, course: res });
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
      historyApplications: result
    });
  });
};

export const getInvestPeriod = () => dispatch => {
  dispatch({
    type: REQUEST_INVEST_PERIOD
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getInvestPeriodFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_INVEST_PERIOD,
      investPeriod: result
    });
  });
};

export const getSchemaSettings = () => dispatch => {
  dispatch({
    type: REQUEST_SCHEMA_SETTINGS
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getSchemaSettingsFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_SCHEMA_SETTINGS,
      schemaSettings: result
    });
  });
};

export const getYieldList = () => dispatch => {
  dispatch({
    type: REQUEST_YIELD_LIST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getYieldListFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_YIELD_LIST,
      schemaSettings: result
    });
  });
};

export const getArticles = () => dispatch => {
  dispatch({
    type: REQEST_ARTICLES_LIST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getArticlesFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_ARTICLES_LIST,
      articlesList: result
    });
  });
};

export const getPortalNews = () => dispatch => {
  dispatch({
    type: REQUEST_PORTAL_NEWS
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getPortalNewsFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_PORTAL_NEWS,
      portalNews: result
    });
  });
};