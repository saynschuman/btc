import { AUTH_REQUEST, AUTH_RESPONSE, AUTH_ERROR } from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  success: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, isLoading: true, isLoaded: false };
    case AUTH_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        success: action.success
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        success: action.success
      };
    default:
      return state;
  }
}
