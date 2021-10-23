import { callApi } from "../utils/callApi";

export const coursesCatogeryApi = {
  getCatogoryCourses: () => {
    return callApi("QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
};
