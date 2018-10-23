import { REQUEST, RESPONSE } from "../constants";
import { checkiSAdmin } from "../backend/api";

export const isAdmin = authData => dispatch => {
  dispatch({
    type: REQUEST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(checkiSAdmin(authData));
    }, 300);
  });

  promise.then(result => {
    console.log(result.data);
    return dispatch({
      type: RESPONSE,
      isAdmin: result
    });
  });
};
