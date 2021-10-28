import { GROUP_ID } from "settings/apiConfig";
import { callApi } from "../utils/callApi";

export const userApi = {
  loginApi(user) {
    return callApi(`QuanLyNguoiDung/DangNhap`, "POST", user);
  },
  signupApi(user) {
    return callApi(`QuanLyNguoiDung/DangKy`, "POST", user);
  },
  fetchUserInfoApi(accessToken) {
    return callApi(
      `QuanLyNguoiDung/ThongTinNguoiDung`,
      "POST",
      null,
      accessToken
    );
  },
  editProfileApi(accessToken, user) {
    return callApi(
      `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      "PUT",
      user,
      accessToken
    );
  },
  //Admin module
  fetchAllUserApi(){
    return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)
  }
};
