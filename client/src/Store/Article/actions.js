import {  ARTICLE_ERROR_STATE, ARTICLE_PENDING_STATE, SET_ARTICLE } from './constants';

export const setArticlePendingState = () => {
    return {
        type: ARTICLE_PENDING_STATE
    }
}
export const setArticleErrorState = (err) => {
    return {
        type: ARTICLE_ERROR_STATE,
        payload: err
    }
}
export const setArticleState = (data) => {
    return {
        type: SET_ARTICLE,
        payload: data
    }
}

export const fetchArticleList = () => {
    return async (dispatch) => {
        try {
            dispatch(setArticlePendingState())
            const res = await fetch(`http://localhost:3000/article`)
            const articleList = await res.json();
            console.log(articleList)
            dispatch(setArticleState(articleList))
        }
        catch (error) {
            dispatch(setArticleErrorState(error))
        }
    }
}