import React from "react";
import './Footer.scss'
export default function Footer() {
    return (
        <>
            <footer className='text-gray-900'>
                <div className="footer__top">
                    <div className="row">
                        <div className="col-md-9">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link bold" href="#">Udemy for Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link bold" href="#">
                                        Teach on Udemy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Udemy app</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Careers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Help and Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Affiliate</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sitemap</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Featured courses</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 ">
                            <div className="btn-group dropup text-md-right">
                                <button type="button" className="btn button--dropup dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-globe" />English
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">English</a>
                                    <a className="dropdown-item" href="#">Deutsch</a>
                                    <a className="dropdown-item" href="#">Español</a>
                                    <a className="dropdown-item" href="#">Français</a>
                                    <a className="dropdown-item" href="#">Bahasa Indonesia</a>
                                    <a className="dropdown-item" href="#">Italiano</a>
                                    <a className="dropdown-item" href="#">日本語</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer__bottom">
                    <div className="row">
                        <div className="col-md-6">
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
                        </div>
                        <div className="cols-md-6 flex-auto">
                            <ul className="nav justify-content-md-end">
                                <span className="text-black">Copyright © 2021 by T&P</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
}
