import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registresupp } from "../../Redux/Action/Supplier";
import Errorrs from "../Error/Errorrs";

const Registresupp = ({ history }) => {
    const [supplier, setsupplier] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    });
    const dispatch = useDispatch();
    const errors = useSelector((state) => state.supplierReducer.error);
    const handleChange = (e) => {
        setsupplier({ ...supplier, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <div>
                <div className="container-fluid">
                    <div className="row no-gutter">
                        {errors.length > 0 ? (
                            <Errorrs error={errors[0]} />
                        ) : (
                            "emailshould be unique"
                        )}

                        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
                        <div className="col-md-8 col-lg-6">
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 col-lg-8 mx-auto">
                                            <h3 className="login-heading mb-4">
                                                Create an account for supplier!
                                            </h3>
                                            {/* {errorrs.length > 0 ? (
                                                <Errorrs error={errorrs[0]} />
                                            ) : (
                                                "emailshould be unique"
                                            )} */}
                                            <form>
                                                <label htmlFor="inputEmail">
                                                    Name:
                                                </label>
                                                <div className="form-label-group">
                                                    <input
                                                        type="TEXT"
                                                        id="inputnAME"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Name User"
                                                        required
                                                        autofocus
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <label htmlFor="inputEmail">
                                                    Email address
                                                </label>
                                                <div className="form-label-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="inputEmail"
                                                        className="form-control"
                                                        placeholder="Email address"
                                                        required
                                                        autofocus
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <label htmlFor="inputPassword">
                                                    Password
                                                </label>
                                                <div className="form-label-group">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="inputPassword"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <label htmlFor="inputEmail">
                                                    Phone Number
                                                </label>
                                                <div className="form-label-group">
                                                    <input
                                                        type="number"
                                                        id="inputPhone"
                                                        className="form-control"
                                                        placeholder="enter your phone number"
                                                        name="phone"
                                                        autofocus
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck1"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck1"
                                                    >
                                                        Remember password
                                                    </label>
                                                </div>
                                                <button
                                                    className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                                                    type="submit"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(
                                                            registresupp(
                                                                supplier,
                                                                history
                                                            )
                                                        );
                                                    }}
                                                >
                                                    Sign Up
                                                </button>
                                                <div className="text-center">
                                                    Forgot password?
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registresupp;
