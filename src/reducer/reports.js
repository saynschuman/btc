import {
  INVESTORS_REPORT_REQUEST,
  INVESTORS_REPORT_RESPONSE
} from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  investorsReports: ""
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
    default:
      return state;
  }
}
