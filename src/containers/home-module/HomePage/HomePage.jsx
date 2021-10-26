import React from 'react'
import Carousel from './Carousel/Carousel'
import Courses from './Courses/Courses'
import PopularCourses from './PopularCourses/PopularCourses'
import CategoryCourses from './CategoryCourses/'

export default function HomePage() {
    return (
        <div>
            <Carousel />
            <Courses />
            <PopularCourses />
            <CategoryCourses />
        </div>
    )
}
