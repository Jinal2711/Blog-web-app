
import {
    LOGIN_ERROR_STATE,
    LOGIN_PENDING_STATE,
    SET_USER_DATA,
  } from "./constants";

const initialState = {
    pending: false,
    userData: undefined,
    loginError: ""
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_PENDING_STATE:
          return {
            ...state,
            pending: true,
          };
        case SET_USER_DATA:
          return {
            ...state,
            pending: false,
            userData: action.payload,
          };
        case LOGIN_ERROR_STATE:
          return {
            ...state,
            pending: false,
            error: action.payload,
          };
        default:
          return state;
      }
}