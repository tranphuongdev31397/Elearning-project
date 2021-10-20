import { callApi } from "../utils/callApi";

export const userApi = {
  loginApi(user) {
   return callApi(`QuanLyNguoiDung/DangNhap`, "POST", user);
  },
};
