import { courseApi } from "apis/courseApi";

const { FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAIL } = require("./types");

const actFetchCategoryRequest = () => ({
    type: FETCH_CATEGORY_REQUEST,
    payload: null
})
const actFetchCategorySuccess = (categoryList) => ({
    type: FETCH_CATEGORY_SUCCESS,
    payload: categoryList
})
const actFetchCategoryFail = (error) => ({
    type: FETCH_CATEGORY_FAIL,
    payload: error
})

export const actFetchCategory = () => {
    return dispatch => {
        dispatch(actFetchCategoryRequest())
        courseApi.fetchCatogoryCoursesApi()
        .then(res => {
            dispatch(actFetchCategorySuccess(res.data))
        })
        .catch(err => {
            dispatch(actFetchCategoryFail(err))
        })
    }
}