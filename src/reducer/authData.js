import { REQUEST, RESPONSE } from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  isAdmin: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return { ...state, isLoading: true, isLoaded: false };
    case RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isAdmin: action.isAdmin
      };
    default:
      return state;
  }
}
