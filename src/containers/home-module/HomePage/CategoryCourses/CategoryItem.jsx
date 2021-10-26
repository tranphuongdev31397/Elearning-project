import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import { post } from "jquery";
export default function CategoryItem() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        Axios.get(
            // "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc"
            "https://60fec3872574110017078792.mockapi.io/DanhMucKhoaHoc"
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

    return (
        <Fragment>
            {posts?.map((post, key) => {
                return (
                    <div className="text-center">
                        <div className="categories__items">

                            <i class="fas fa-code"></i>
                            {/* <img className="" src=" https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt="" srcset="" /> */}
                            <p className="nameCourse text-2xl" key={post.id}>
                                {post.tenDanhMuc}
                            </p>
                        </div>

                    </div>
                );
            })}
        </Fragment>
    );
}
