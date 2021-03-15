import { CATEGORY_ERROR_STATE, CATEGORY_PENDING_STATE, SET_CATEGORY } from './constants';


export const setCategoryPendingState = () => {
    return {
        type: CATEGORY_PENDING_STATE
    }
}
export const setCategoryErrorState = (err) => {
    return {
        type: CATEGORY_ERROR_STATE,
        payload: err
    }
}
export const setCategoryState = (data) => {
    return {
        type: SET_CATEGORY,
        payload: data
    }
}

export const fetchCategoryList = () => {
    return async (dispatch) => { 
        try {
            dispatch(setCategoryPendingState())
            const res = await fetch(`http://localhost:3000/category`)
            const categoryList = await res.json();
            console.log(categoryList)
            dispatch(setCategoryState(categoryList))
        }
        catch (error) {
            dispatch(setCategoryErrorState(error))
        }
    }
}
