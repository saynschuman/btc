import {
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
  RESPONSE_INVEST_PERIOD
} from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  investorsReports: [],
  investitionsIsLoading: false,
  investitionsIsLoaded: false,
  investitionsReports: [],
  chargeTableIsLoading: false,
  chargeTableIsLoaded: false,
  chargeTable: [],
  requestApplicationsIsLoading: false,
  requestApplicationsIsLoaded: false,
  requestApplications: [],
  historyApplicationsIsLoading: false,
  historyApplicationsIsLoaded: false,
  historyApplications: [],
  investPeriodIsLoading: false,
  investPeriodIsLoaded: false,
  investPeriod: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INVESTORS_REPORT_REQUEST:
      return { ...state, isLoading: true, isLoaded: false };
    case INVESTORS_REPORT_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        investorsReports: action.investorsReports
      };
    case INVESTITIONS_REPORT_REQUEST:
      return {
        ...state,
        investitionsIsLoading: true,
        investitionsIsLoaded: false
      };
    case INVESTITIONS_REPORT_RESPONSE:
      return {
        ...state,
        investitionsIsLoading: false,
        investitionsIsLoaded: true,
        investitionsReports: action.investitionsReports
      };
    case CHARGE_TABLE_REQUEST:
      return {
        ...state,
        chargeTableIsLoading: true,
        chargeTableIsLoaded: false
      };
    case CHARGE_TABLE_REPORT_RESPONSE:
      return {
        ...state,
        chargeTableIsLoading: false,
        chargeTableIsLoaded: true,
        chargeTable: action.chargeTable
      };
    case REQUEST_REQUEST_APPLICATIONS:
      return {
        ...state,
        requestApplicationsIsLoading: true,
        requestApplicationsIsLoaded: false
      };
    case RESPONSE_REQUEST_APPLICATIONS:
      return {
        ...state,
        requestApplicationsIsLoading: false,
        requestApplicationsIsLoaded: true,
        requestApplications: action.requestApplications
      };
    case REQUEST_HISTORY_APPLICATIONS:
      return {
        ...state,
        historyApplicationsIsLoading: true,
        historyApplicationsIsLoaded: false
      };
    case RESPONSE_HISTORY_APPLICATIONS:
      return {
        ...state,
        historyApplicationsIsLoading: false,
        historyApplicationsIsLoaded: true,
        historyApplications: action.historyApplications
      };
    case REQUEST_INVEST_PERIOD:
      return {
        ...state,
        investPeriodIsLoading: true,
        investPeriodIsLoaded: false
      };
    case RESPONSE_INVEST_PERIOD:
      return {
        ...state,
        investPeriodIsLoading: false,
        investPeriodIsLoaded: true,
        investPeriod: action.investPeriod
      };
    default:
      return state;
  }
}
