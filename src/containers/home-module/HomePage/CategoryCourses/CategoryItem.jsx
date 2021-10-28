import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import { post } from "jquery";
export default function CategoryItem() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        Axios.get(
            "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc"
            // "https://60fec3872574110017078792.mockapi.io/DanhMucKhoaHoc"
        )
            .then((res) => {
                setPosts(res.data);
                console.log(res.data);
                console.log("posts: ", posts);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const imageSrc = [
        {
            id: "BackEnd",
            src: "https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg",
        },
        {
            id: "Design",
            src: "https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg",
        },
        {
            id: "DiDong",
            src: "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg",
        },
        {
            id: "FrontEnd",
            src: "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg",
        },
        {
            id: "FullStack",
            src: "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg",
        },
        {
            id: "TuDuy",
            src: "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
        },
    ];

    return (
        <Fragment>
            {posts?.map((post, key) => {
                return (
                    <>
                        <div className="categories__item">
                            <div className="categories__img">
                                <img
                                    src="https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg"
                                    alt=""
                                    srcset=""
                                />
                            </div>
                            <div className="categories__text">
                                <p className=" text-center">{post.tenDanhMuc}</p>
                            </div>
                        </div>
                    </>
                );
            })}
        </Fragment>
    );
}
