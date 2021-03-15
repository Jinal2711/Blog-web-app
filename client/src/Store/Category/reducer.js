import {
    CATEGORY_ERROR_STATE,
    CATEGORY_PENDING_STATE,
    SET_CATEGORY,
  } from "./constants";
  
  const initialState = {
    pending: false,
    categories: [],
    error: false,
  };
  
  export const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case CATEGORY_PENDING_STATE:
        return {
          ...state,
          pending: true,
        };
      case SET_CATEGORY:
        return {
          ...state,
          pending: false,
          categories: action.payload,
        };
      case CATEGORY_ERROR_STATE:
        return {
          ...state,
          pending: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  