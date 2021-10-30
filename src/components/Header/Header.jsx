import React from "react";
import NavAuth from "./NavAuth/NavAuth";
import "./Header.scss";
import NavSearch from "./NavSearch/NavSearch";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <nav className="navbar__container">
      <div className="navbav__box grid grid-cols-10 p-3 shadow-md mx-auto gap-2">
        <div className="navbar__logo col-span-1 navbar__item">
          <a href="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy"
              width={91}
              height={34}
            />
          </a>
        </div>
        <div className="navbar__content col-span-9">
          <ul className="grid grid-cols-9 gap-4 mb-0">
            <li className="col-span-4 navbar__item">
              <NavSearch />
            </li>
            <Link to='/courses' className="navbar__item linkrouter__config">Courses</Link>
            <li className="navbar__item">Udemy Business</li>
            <li className="navbar__item">Teach on Udemy</li>

            <li className="col-span-2 navbar__item">
              <NavAuth />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
