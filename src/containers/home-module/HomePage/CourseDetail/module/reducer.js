import {
  FETCH_COURSE_DETAIL_FAIL,
  FETCH_COURSE_DETAIL_REQUEST,
  FETCH_COURSE_DETAIL_SUCCESS,
} from "./types";

const initialState = {
  courseDetail: [],
  loading: true,
  error: null,
};

 const courseDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSE_DETAIL_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_COURSE_DETAIL_SUCCESS:
      return { ...state, loading: false, error: null, courseDetail: payload };

    case FETCH_COURSE_DETAIL_FAIL:
      return { ...state, ...payload, loading: false, error: payload };

    default:
      return state;
  }
};
export default courseDetailReducer