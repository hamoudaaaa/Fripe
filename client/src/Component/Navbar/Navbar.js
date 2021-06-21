import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, videErrorsuser } from "../../Redux/Action/User";
import { NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { logoutsupp, videErrorsupp } from "../../Redux/Action/Supplier";
const Navbar = () => {
    const isauth = useSelector((state) => state.userReducer.isauth);
    const isauthsupp = useSelector((state) => state.supplierReducer.isauthsup);
    const user = useSelector((state) => state.userReducer.user);
    const cart = useSelector((state) => state.cartReducer.Carts.length);
    const dispatch = useDispatch();
    return (
        <header>
            <Link to="/">
                <div style={{ color: "red" }}>
                    <h3
                        style={{
                            textTransform: "none",
                            fontSize: "50px",
                            fontStyle: "italic",
                            textDecorationLine: "underline",
                        }}
                    >
                        fripe en ligne
                    </h3>
                </div>
            </Link>
            <nav>
                {isauth ? (
                    <Link to="/cart">
                        <li>
                            {" "}
                            <i class="fa fa-shopping-cart" aria-hidden="true">
                                Cart({cart})
                            </i>
                        </li>
                    </Link>
                ) : null}
                {isauth || isauthsupp ? (
                    <ul>
                        {/* <li>
                            {" "}
                            <i className="fas fa-shopping-cart">Cart</i>{" "}
                        </li>{" "} */}
                        <Link to="/">
                            <li>
                                {" "}
                                <a className="btt">
                                    {" "}
                                    <button
                                        onClick={() => {
                                            dispatch(logout());
                                            dispatch(logoutsupp());
                                            dispatch(videErrorsuser());
                                            dispatch(videErrorsupp());
                                        }}
                                    >
                                        {" "}
                                        Logout
                                    </button>
                                </a>
                            </li>
                        </Link>{" "}
                        {user && user.isAdmin ? (
                            <Link to="/admin">
                                <li>
                                    {/* About us{" "} */}
                                    <a className="btt">
                                        {" "}
                                        <button> Admin</button>
                                    </a>{" "}
                                </li>
                            </Link>
                        ) : null}
                    </ul>
                ) : (
                    <ul className="menu">
                        <li>
                            <a className="btt">
                                <NavDropdown
                                    title="Registre"
                                    id="navbarScrollingDropdown"
                                >
                                    <Link to="/registre">
                                        <NavDropdown.Item
                                            href="#action3"
                                            onClick={() =>
                                                dispatch(videErrorsuser())
                                            }
                                        >
                                            Registre as User
                                        </NavDropdown.Item>
                                    </Link>
                                    <Link to="/registresupp">
                                        <NavDropdown.Item
                                            href="#action4"
                                            onClick={() =>
                                                dispatch(videErrorsupp())
                                            }
                                        >
                                            Register as supplier
                                        </NavDropdown.Item>
                                    </Link>
                                </NavDropdown>
                            </a>{" "}
                        </li>{" "}
                        <li>
                            <a className="btt">
                                <NavDropdown
                                    title="Login"
                                    id="navbarScrollingDropdown"
                                >
                                    <Link to="/login">
                                        <NavDropdown.Item
                                            href="#action3"
                                            onClick={() =>
                                                dispatch(videErrorsuser())
                                            }
                                        >
                                            Login as User
                                        </NavDropdown.Item>
                                    </Link>
                                    <Link to="/loginsupp">
                                        <NavDropdown.Item
                                            href="#action4"
                                            onClick={() =>
                                                dispatch(videErrorsupp())
                                            }
                                        >
                                            Login as supplier
                                        </NavDropdown.Item>
                                    </Link>
                                    {/* <NavDropdown.Divider /> */}
                                </NavDropdown>
                            </a>{" "}
                        </li>
                        <Link to="/profile">
                            <li>
                                {/* About us{" "} */}
                                <a className="btt">
                                    {" "}
                                    <button> Profile</button>
                                </a>{" "}
                            </li>
                        </Link>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
