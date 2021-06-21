import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registre } from "../../Redux/Action/User";
import Errorrs from "../Error/Errorrs";
import "./Registre.css";
const Registre = ({ history }) => {
    const error = useSelector((state) => state.userReducer.error);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cin: "",
        phone: "",
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        {error.length > 0 ? (
                                            <Errorrs error={error[0]} />
                                        ) : (
                                            "emailshould be unique"
                                        )}

                                        {/* {error.length > 0
                                            ? error.map((error) => (
                                                  <Errorrs error={error} />
                                              ))
                                            : "emailshould be unique"} */}
                                        {/* {errors.length > 0
                                            ? errors.map((el) => (
                                                  <Errors error={el} />
                                              ))
                                            : null} */}
                                        <h3 className="login-heading mb-4">
                                            Create an account!
                                        </h3>
                                        <form
                                        // onSubmit={(e) => handleRegister(e)}
                                        >
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
                                                Cin:
                                            </label>
                                            <input
                                                type="number"
                                                id="inputcin"
                                                className="form-control"
                                                placeholder="enter your cin"
                                                name="cin"
                                                autofocus
                                                onChange={handleChange}
                                            />
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
                                                // onClick={handleRegister}
                                                onClick={(e) => {
                                                    e.preventDefault();

                                                    dispatch(
                                                        registre(user, history)
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
    );
};

export default Registre;
