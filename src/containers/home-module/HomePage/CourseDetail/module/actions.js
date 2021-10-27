import { courseApi } from "apis/courseApi";

const { FETCH_COURSE_DETAIL_REQUEST, FETCH_COURSE_DETAIL_SUCCESS, FETCH_COURSE_DETAIL_FAIL } = require("./types");

const actFetchCourseDetailRequest = () => ({
    type: FETCH_COURSE_DETAIL_REQUEST
})
const actFetchCourseDetailSuccess = (courseDetail) => ({
    type: FETCH_COURSE_DETAIL_SUCCESS,
    payload: courseDetail
})
const actFetchCourseDetailFail = (error) => ({
    type: FETCH_COURSE_DETAIL_FAIL,
    payload: error
})


export const actFetchCourseDetail = (courseId) => {
    return dispatch => {
        dispatch(actFetchCourseDetailRequest())
        courseApi.fetchCourseDetailApi(courseId)
        .then(res => {
            if(res.status === 200) {
                dispatch(actFetchCourseDetailSuccess(res.data))
            }
        })
        .catch(err => {
           dispatch(actFetchCourseDetailFail(err))
        })
    }
}