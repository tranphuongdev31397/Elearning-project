import { callApi } from "../utils/callApi";

export const courseApi = {
  fetchCatogoryCoursesApi: () => {
    return callApi(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  },
  fetchCourseDetailApi: (courseId) => {
    return callApi(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`)
  }
};
