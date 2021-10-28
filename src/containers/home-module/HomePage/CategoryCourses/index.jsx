import React from "react";
import "./CategoryCourses.scss";
import CategoryItem from "./CategoryItem";
export default function CategoryCourses() {
    return (
        <section className="categories">
            <h2>Top Categories</h2>
            <div className="categories__content">
                <CategoryItem />
            </div>
        </section>
    );
}
