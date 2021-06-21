import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { login } from "../../Redux/Action/User";
import Errorrs from "../Error/Errorrs";
import "./Login.css";

const Login = ({ history }) => {
    const [user, setUser] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const error = useSelector((state) => state.userReducer.error);
    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            {/* <div className="row">
                                {" "}
                                <img
                                    alt="fripe en ligne"
                                    className="logo"
                                />{" "}
                            </div> */}
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                {" "}
                                <img
                                    src="https://fripeji.tn/modules/tvcmsslider/views/img/a6a229edb15747107c61_web-banner-1-2%20(1).jpg"
                                    className="image"
                                    alt=" efrez wahdek"
                                />{" "}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row mb-4 px-3">
                                <h6
                                    className="mb-0 mr-4 mt-2"
                                    style={{ align: "center" }}
                                >
                                    {" "}
                                    Sign in as User
                                </h6>
                                {/* <div className="facebook text-center mr-3">
                                    <div className="fa fa-facebook" />
                                </div>
                                <div className="twitter text-center mr-3">
                                    <div className="fa fa-twitter" />
                                </div>
                                <div className="linkedin text-center mr-3">
                                    <div className="fa fa-linkedin" />
                                </div> */}
                            </div>
                            {/* <div className="row px-3 mb-4">
                                <div className="line" />{" "}
                                <small className="or text-center">Or</small>
                                <div className="line" />
                            </div> */}
                            <div className="row px-3">
                                {" "}
                                <label className="mb-1">
                                    <h6 className="mb-0 text-sm">
                                        Email Address
                                    </h6>
                                </label>{" "}
                                <input
                                    className="mb-4"
                                    type="text"
                                    name="email"
                                    placeholder="Enter a valid email address"
                                    onChange={handlechange}
                                />{" "}
                            </div>
                            {error.length > 0 ? (
                                <Errorrs error={error[0]} />
                            ) : (
                                "emailshould be unique  "
                            )}
                            <div className="row px-3">
                                {" "}
                                <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Password</h6>
                                </label>{" "}
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    onChange={handlechange}
                                />{" "}
                            </div>
                            <div className="row px-3 mb-4">
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    {" "}
                                    <input
                                        id="chk1"
                                        type="checkbox"
                                        name="chk"
                                        className="custom-control-input"
                                    />{" "}
                                    <label
                                        htmlFor="chk1"
                                        className="custom-control-label text-sm"
                                    >
                                        Remember me
                                    </label>{" "}
                                </div>{" "}
                                <a href="#" className="ml-auto mb-0 text-sm">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="row mb-3 px-3">
                                {" "}
                                <button
                                    type="submit"
                                    className="btn btn-blue text-center"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(login(user, history));
                                    }}
                                >
                                    Login
                                </button>{" "}
                            </div>
                            <div className="row mb-4 px-3">
                                {" "}
                                <small className="font-weight-bold">
                                    Don't have an account?{" "}
                                    <Link to="/registre">
                                        {" "}
                                        <a className="text-danger ">
                                            Register
                                        </a>{" "}
                                    </Link>
                                </small>{" "}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-blue py-4">
                    <div className="row px-3">
                        {" "}
                        <small className="ml-4 ml-sm-5 mb-2">
                            Copyright © 2019. All rights reserved.
                        </small>
                        <div className="social-contact ml-4 ml-sm-auto">
                            {" "}
                            <span className="fa fa-facebook mr-4 text-sm" />{" "}
                            <span className="fa fa-google-plus mr-4 text-sm" />{" "}
                            <span className="fa fa-linkedin mr-4 text-sm" />{" "}
                            <span className="fa fa-twitter mr-4 mr-sm-5 text-sm" />{" "}
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Login;
