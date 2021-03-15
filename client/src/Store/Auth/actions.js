import {
  LOGIN_ERROR_STATE,
  LOGIN_PENDING_STATE,
  SET_USER_DATA,
} from "./constants";
import jwt_decode from "jwt-decode";

export const setLoginPendingState = () => {
  return {
    type: LOGIN_PENDING_STATE,
  };
};
export const setLoginErrorState = (err) => {
  return {
    type: LOGIN_ERROR_STATE,
    payload: err,
  };
};
export const setUserData = (data) => {
  return {
    type: SET_USER_DATA,
    payload: data,
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(setLoginPendingState());
      const res = await fetch(`http://localhost:3000/auth/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const { token } = await res.json();
      console.log(jwt_decode(token))
      // dispatch(setUserData(jwt_decode(token)));
      // localStorage.setItem("jwt", token);
    } catch (error) {
      dispatch(setLoginErrorState("Something went wrong! " + error));
    }
  };
};
