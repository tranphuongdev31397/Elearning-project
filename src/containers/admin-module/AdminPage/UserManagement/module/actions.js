import { userApi } from "apis/userApi";
import {
  FETCH_ALL_USER_REQUEST,
  FETCH_ALL_USER_SUCCESS,
  FETCH_ALL_USER_FAIL,
} from "./types";

const actFetchAllUserRequest = () => ({
  type: FETCH_ALL_USER_REQUEST,
  payload: null,
});
const actFetchAllUserSuccess = (userList) => ({
  type: FETCH_ALL_USER_SUCCESS,
  payload: userList,
});
const actFetchAllUserFail = (error) => ({
  type: FETCH_ALL_USER_FAIL,
  payload: error,
});

export const actFetchAllUser = () => {
    return dispatch => {
        dispatch(actFetchAllUserRequest())
        userApi.fetchAllUserApi()
        .then(res => {
          dispatch(actFetchAllUserSuccess(res.data))
        })
        .catch(error => {
          dispatch(actFetchAllUserFail(error))
        })
    }
}