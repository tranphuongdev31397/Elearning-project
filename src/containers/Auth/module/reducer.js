import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./types";

const initialState = {
  currentUser: null,
  loading: true,
  err: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //LOGIN

    case LOGIN_REQUEST:
      return { ...state, loading: true, err: null };
    case LOGIN_SUCCESS:
      //payload.data is data of currentUser
      return { ...state, loading: false, currentUser: payload.data, err: null };
    case LOGIN_FAIL:
      //payload is error mess
      return { ...state, loading: false, err: payload };
    case LOG_OUT:
      return { ...state, loading: false, currentUser: payload };
    default:
      return state;
  }
};
export default authReducer;
