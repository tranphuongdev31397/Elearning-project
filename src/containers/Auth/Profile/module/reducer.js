import {
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  FETCH_USER_INFO_FAIL,
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
} from "./types";

const initialState = {
  userInfo: null,
  loading: true,
  error: null,
};

const userInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_INFO_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USER_INFO_SUCCESS:
      return { ...state, userInfo: payload, loading: false, error: null };
    case FETCH_USER_INFO_FAIL:
      return { ...state, loading: false, error: payload };

    case EDIT_PROFILE_REQUEST:
      return { ...state, loading: true, error: null };
    case EDIT_PROFILE_SUCCESS:
      const userInfoUpdate = { ...payload };
      userInfoUpdate.chiTietKhoaHocGhiDanh =
        state.userInfo.chiTietKhoaHocGhiDanh;
      userInfoUpdate.soDT = userInfoUpdate.soDt;
      return {
        ...state,
        userInfo: userInfoUpdate,
        loading: false,
        error: null,
      };
    case EDIT_PROFILE_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
export default userInfoReducer;
