import React from "react";
import { useSelector } from "react-redux";
import { UserIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useCallback } from "react";
import {  NavLink } from "react-router-dom";
import "./Profile.scss";

export default function Profile(props) {
  const userInfo = useSelector((state) => state.userInfoReducer.userInfo)
  const [activeTitle, setactiveTitle] = useState("Thông tin tài khoản");
  let isActive = "";
  const handleActive = useCallback(
    (e) => {
      console.log(e);
      if (e.target.innerText !== "" && e.target.innerHTML !== "") {
        setactiveTitle(e.target.innerText);
      }
    },
    [activeTitle]
  );

  return (
    <div className="p-10 profile__container">
      <div className="grid grid-cols-4 gap-4 profile__table">
        <div className="col-span-1 w-100 profile__box">
          <div className="profile__user">
            <div className="profile__img  flex items-center justify-center">
              <img
                src="https://picsum.photos/200"
                className="img-fluid rounded-full h-50 w-50"
              />
            </div>
            <div className="profile__name my-4">
              <h5 className="text-center">{userInfo.hoTen}</h5>
            </div>
          </div>
          <div className="profile__link">
            <ul className="list__config profileActive">
              <li>
                <NavLink
                  to="/profile/userinfo"
                  exact={true}
                  className="p-2 inline-flex items-center justify-start w-100 z-10"
                  activeClassName="isActive"
                >
                  <UserIcon className="w-5 mr-2 inline-block" disabled />
                  <span>Thông tin tài khoản</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile/"
                  exact={true}
                  className="p-2 inline-flex items-center justify-start w-100 z-10"
                  activeClassName="isActive"
                >
                  <UserIcon className="w-5 mr-2 inline-block" />
                  <span>Thông tin tài khoản</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-3 grid grid-rows-4 shadow-md p-5 rounded-lg">
          <h3 className="row-span-1 profile__title font-semibold flex items-center">
            {activeTitle}
          </h3>
          <div className="row-span-3 profile__info">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
