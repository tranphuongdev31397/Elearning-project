import Loader from "components/Loader";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { actFetchCategory } from "./module/actions";

export default function CoursesCategory() {
  const dispatch = useDispatch();
  const { categoryList, loading } = useSelector(
    (state) => state.categoryListReducer
  );
  console.log(categoryList);
  useEffect(() => {
    dispatch(actFetchCategory());
  }, []);
  if (loading) return <Loader />;
  return (
    <>
      <NavLink to="/courses/all" className="linkrouter__config">
        Tất cả khóa học
      </NavLink>
      {categoryList.map((category) => {
        return (
        <NavLink
          to={`/courses/${category.maDanhMuc}`}
          key={category.maDanhMuc}
          className="linkrouter__config"
        >
          {category.tenDanhMuc}
        </NavLink>
        )
      })}
    </>
  );
}
