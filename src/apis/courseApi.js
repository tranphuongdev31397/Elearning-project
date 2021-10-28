import { callApi } from "../utils/callApi";

export const courseApi = {
  getCatogoryCourses: () => {
    return callApi(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`, "GET");
  },
  fetchCourseDetailApi: (courseId) => {
    return callApi(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`)
  }
};
