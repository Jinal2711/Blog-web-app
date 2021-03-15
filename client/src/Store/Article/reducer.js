import {
  ARTICLE_ERROR_STATE,
  ARTICLE_PENDING_STATE,
  SET_ARTICLE,
} from "../../Constants";

const initialState = {
  pending: false,
  articles: [],
  error: false,
};

export const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_PENDING_STATE:
      return {
        ...state,
        pending: true,
      };
    case SET_ARTICLE:
      return {
        ...state,
        pending: false,
        articles: action.payload,
      };
    case ARTICLE_ERROR_STATE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
