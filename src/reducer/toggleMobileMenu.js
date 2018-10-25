import { SHOW_MOBILE_MENU } from "../constants";

const initialState = {
  mobileMenuIsOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_MOBILE_MENU:
      return { ...state, mobileMenuIsOpen: !state.mobileMenuIsOpen };
    default:
      return state;
  }
}
