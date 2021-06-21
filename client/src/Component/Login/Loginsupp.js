import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginsupp } from "../../Redux/Action/Supplier";
import Errorrs from "../Error/Errorrs";
const Loginsupp = ({ history }) => {
    const [supplier, setsupplier] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const errors = useSelector((state) => state.supplierReducer.error);

    const handlechange = (e) => {
        setsupplier({ ...supplier, [e.target.name]: e.target.value });
    };
    return (
        <div>
            {errors.length > 0 ? (
                <Errorrs error={errors[0]} />
            ) : (
                "emailshould be unique"
            )}
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
                                        // style={{ align: "center" }}
                                    >
                                        {" "}
                                        Sign in as Supplier
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
                                {/* {error.length > 0 ? (
                                    <Errorrs error={error[0]} />
                                ) : (
                                    "email should be unique"
                                )} */}

                                <div className="row px-3">
                                    {" "}
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">
                                            Password
                                        </h6>
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
                                    <a
                                        href="#"
                                        className="ml-auto mb-0 text-sm"
                                    >
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
                                            dispatch(
                                                loginsupp(supplier, history)
                                            );
                                        }}
                                    >
                                        Login
                                    </button>{" "}
                                </div>
                                <div className="row mb-4 px-3">
                                    {" "}
                                    <small className="font-weight-bold">
                                        Don't have an account supplier?{" "}
                                        <Link to="/registresupp">
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
                </div>
            </div>
        </div>
    );
};

export default Loginsupp;
