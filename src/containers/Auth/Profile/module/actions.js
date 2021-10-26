import Swal from 'sweetalert2'
import { userApi } from "apis/userApi";
import {
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAIL,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
} from "./types";


//Get user info
const actFetchUserInfoRequest = () => ({
  type: FETCH_USER_INFO_REQUEST,
});
const actFetchUserInfoSuccess = (userInfo) => ({
  type: FETCH_USER_INFO_SUCCESS,
  payload: userInfo,
});
const actFetchUserInfoFail = (error) => ({
  type: FETCH_USER_INFO_FAIL,
  payload: error,
});

export const actFetchUserInfo = (accessToken) => {
  return (dispatch) => {
    dispatch(actFetchUserInfoRequest());
    userApi
      .fetchUserInfoApi(accessToken)
      .then((res) => {
        dispatch(actFetchUserInfoSuccess(res.data))
      })
      .catch((error) => {
        dispatch(actFetchUserInfoFail(error));
      });
  };
};

//Change user info
const actEditProfileRequest = () => ({
  type: EDIT_PROFILE_REQUEST,
});
const actEditProfileSuccess = (userInfo) => ({
  type: EDIT_PROFILE_SUCCESS,
  payload: userInfo,
});
const actEditProfileFail = (error) => ({
  type: EDIT_PROFILE_FAIL,
  payload: error,
});

export const actEditProfile = (accessToken, user) => {
  return (dispatch) => {
    Swal.fire({
      title: 'Bạn muốn lưu thay đổi?',
      icon: 'question',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Xác nhận',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(actEditProfileRequest());
        userApi
          .editProfileApi(accessToken, user)
          .then((res) => {
            if (res.status === 200) {
              dispatch(actEditProfileSuccess(res.data));
            }
          })
          .catch((error) => {
            console.log(error);
            dispatch(actEditProfileFail(error));
          });
        Swal.fire('Lưu thay đổi thành công!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   
  };
};
