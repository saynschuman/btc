import { REQUEST, RESPONSE } from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  whoIsLogged: ""
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
        whoIsLogged: action.whoIsLogged
      };
    default:
      return state;
  }
}
