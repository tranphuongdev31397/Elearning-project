import React from "react";
import CourseCard from "./CourseCard/CourseCard";

export default function CourseDetail() {
  return (
    <div className="courseD">
      <div className="courseD__container">
        <div className="courseD__info bg-gray-900 text-white">
          <div className="top-container container relative">
            <div className="courseD__box  w-3/5 py-10">
              <div className="courseD__category">Category</div>
              <div className="courseD__textBox">
                <div className="courseD__name">
                  <h3>Lập trình hướng đối tượng</h3>
                </div>
                <div className="course__text">
                  <div className="course__teacher">
                    <h5>Giảng viên: Trần Phương</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni dolore praesentium ratione labore necessitatibus
                      asperiores, perspiciatis quas ex sit rem.
                    </p>
                  </div>
                  <div className="courseD__view">
                    <span>Lượt xem: 100</span>
                  </div>
                </div>
              </div>
            </div>
           <CourseCard />
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur animi necessitatibus, amet dignissimos quibusdam
                    inventore similique? Ut sequi, at tempora itaque tenetur
                    quo? Ab fuga repudiandae dolor incidunt perspiciatis
                    repellendus voluptate. Minus quia cumque, quasi ex neque
                    animi dolore, explicabo incidunt ipsa ullam nostrum. Quia
                    deleniti doloribus ullam nostrum culpa?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
