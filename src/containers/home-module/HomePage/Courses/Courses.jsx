import React from 'react'
import CoursesCategory from './CoursesCategory/CoursesCategory'


export default function Courses(props) {
    return (
        <div className="courses__container">
            <div className="courses__category shadow-md h-20">
                <div className="courses__cateBox p-8">
                  <div className="grid grid-cols-7">
                    <CoursesCategory />
                  </div>
                </div>
            </div>
            <div className="courses__content">
              {props.children}
            </div>
        </div>
    )
}
