import { REQUEST, RESPONSE } from "../constants";
import { whoAreYou } from "../backend/api";

export const checkWhoAreYou = authData => dispatch => {
  dispatch({
    type: REQUEST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(whoAreYou(authData));
    }, 300);
  });

  promise.then(result => {
    console.log(result.data);
    return dispatch({
      type: RESPONSE,
      whoIsLogged: result
    });
  });
};
