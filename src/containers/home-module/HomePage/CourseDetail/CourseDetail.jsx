import React, { useEffect } from "react";
import CourseCard from "./CourseCard/CourseCard";
import CourseBreadcrumb from "./CourseBreadcrumb/CourseBreadcrumb";
import Loader from "components/Loader";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCourseDetail } from "./module/actions";

export default function CourseDetail(props) {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchCourseDetail(courseId));
  }, []);
  const { courseDetail, loading, error } = useSelector(
    (state) => state.courseDetailReducer
  );
  const { tenKhoaHoc, luotXem, hinhAnh, nguoiTao, danhMucKhoaHoc, moTa } =
    courseDetail;
  console.log(loading);
  if (loading === true) return <Loader />;
  return (
    <div className="courseD">
      <div className="courseD__container">
        <div className="courseD__info bg-black text-white">
          <div className="top-container container relative">
            <div className="courseD__box  w-3/5 py-10">
              <div className="courseD__category">
                <CourseBreadcrumb danhMucKhoaHoc={danhMucKhoaHoc}/>
              </div>
              <div className="courseD__textBox">
                <div className="courseD__name">
                  <h3>{tenKhoaHoc}</h3>
                </div>
                <div className="course__text">
                  <div className="course__teacher">
                    <h5>Giảng viên: {nguoiTao.hoTen}</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni dolore praesentium ratione labore necessitatibus
                      asperiores, perspiciatis quas ex sit rem.
                    </p>
                  </div>
                  <div className="courseD__view">
                    <span>Lượt xem: {luotXem}</span>
                  </div>
                </div>
              </div>
            </div>
            <CourseCard hinhAnh={hinhAnh} />
          </div>
        </div>
        <div className="courseD__description">
          <div className="bot-container container ">
            <div className="couseD__box w-3/5 py-10">
              <div className="courseD__textBox">
                <div className="courseD__title">
                  <h5>Mô tả chi tiết</h5>
                </div>
                <div className="courseD__text">
                  <p>{moTa}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
