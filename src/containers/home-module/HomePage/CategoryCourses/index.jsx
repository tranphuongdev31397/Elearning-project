import React from "react";
import "./CategoryCourses.scss";
import CategoryItem from "./CategoryItem";
export default function CategoryCourses() {
    return (
        <section className="categories">
            <div className="categories__content">
                <h2>Top Categories</h2>
                <div className="categories__group-items">
                    <CategoryItem />
                </div>
            </div>
        </section>
    );
}