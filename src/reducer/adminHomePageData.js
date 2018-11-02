import { REQUEST_HOMEPAGE_DATA, RESPONSE_HOMEPAGE_DATA } from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  adminHomePageData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_HOMEPAGE_DATA:
      return { ...state, isLoading: true, isLoaded: false };
    case RESPONSE_HOMEPAGE_DATA:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        adminHomePageData: action.adminHomePageData
      };
    default:
      return state;
  }
}
