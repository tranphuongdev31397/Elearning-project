import { userApi } from "apis/userApi";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./types";

const actLoginRequest = () => ({
  type: LOGIN_REQUEST,
});
const actLoginSuccess = (currentUser) => ({
  type: LOGIN_SUCCESS,
  payload: currentUser,
});
const actLoginFail = (err) => ({
  type: LOGIN_FAIL,
  payload: err,
});
export const actLogin = (user,history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    userApi
      .loginApi(user)
      .then((res) => {
        dispatch(actLoginSuccess(res));
        history.push('/')
      })
      .catch((err) => {
        dispatch(actLoginFail("Tài khoản hoặc mật khẩu không đúng"));
      });
  };
};
export const actLogout = () => ({
  type: LOG_OUT,
  payload: null,
});
