import React from "react";
import "./Carousel.scss";
export default function Carousel() {
    return (
        <>
            <section className="cover">
                <div className="cover__content">
                    <h1>Get there. From here.</h1>
                    <p>
                        Welcome to the place where success begins. Log in for savings. Ends
                        soon.
                    </p>
                    <form className="cover__form">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="What do you want to learn?"
                            />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="fa fa-search" />
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
