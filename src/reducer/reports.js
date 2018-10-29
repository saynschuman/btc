import {
  INVESTORS_REPORT_REQUEST,
  INVESTORS_REPORT_RESPONSE,
  INVESTITIONS_REPORT_REQUEST,
  INVESTITIONS_REPORT_RESPONSE
} from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  investorsReports: [],
  investitionsIsLoading: false,
  investitionsIsLoaded: true,
  investitionsReports: []
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
    default:
      return state;
  }
}
