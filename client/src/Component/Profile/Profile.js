// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Product from "../Product/Product";
// import {
//     get_all_products,
//     get_product_by_id,
// } from "../../Redux/Action/Product";
// import { Table, Button } from "react-bootstrap";
// const Profile = ({ history }) => {
//     // const id = location.state;
//     const Products = useSelector((state) => state.supplierReducer.products);
//     const dispatch = useDispatch();
//     // useEffect(() => {
//     //     dispatch(get_product_by_id(Products.Product.supplier));
//     // }, [dispatch]);
//     const user = useSelector((state) => state.userReducer.user);

//     return (
//         <section>
//             <div style={{ textAlign: "center" }}>
//                 <img
//                     style={{ height: "100px" }}
//                     className="img-fluid"
//                     src="https://uctlanguagecentre.com/wp-content/uploads/2020/05/avatar.png"
//                     alt="user"
//                 />
//                 <h3 className="name"> </h3>
//                 <h4 className="title">name:{Products && Products.supplier}</h4>
//                 <h4 className="title">email:{Products && Products.supplier}</h4>
//                 <h4 className="title">phone:{Products && Products.supplier}</h4>
//             </div>
//             <div style={{ textAlign: "center" }}>
//                 <img
//                     style={{ height: "100px" }}
//                     className="img-fluid"
//                     src="https://uctlanguagecentre.com/wp-content/uploads/2020/05/avatar.png"
//                     alt="user"
//                 />
//                 <h3 className="name"> </h3>
//                 <h4 className="title">name:{user && user.name}</h4>
//                 <h4 className="title">email:{user && user.email}</h4>
//                 <h4 className="title">phone:{user && user.phone}</h4>
//             </div>

//             {Products.length >
//                 ? Products.map((el, i) => (
//                       <Product key={i} product={el} edit={false} />
//                   ))
//                 : null}
//         </section>
//     );
// };

// export default Profile;
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Profile.css";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(());
    // }, [dispatch]);
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [show, setShow] = useState(false);
    const user = useSelector((state) => state.userReducer.user);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section>
            <div className="row py-5 px-4">
                <div className="col-md-5 mx-auto">
                    {/* Profile widget */}
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                        alt="..."
                                        width={130}
                                        className="rounded mb-2 img-thumbnail"
                                    />
                                    <br></br>
                                    <a
                                        href="#"
                                        className="btn btn-outline-dark btn-sm btn-block"
                                        onClick={handleShow}
                                    >
                                        Edit profile
                                    </a>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Name</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            Woohoo, you're reading this text in
                                            a modal!
                                        </Modal.Body>
                                        <Modal.Title>Email</Modal.Title>
                                        <Modal.Body>
                                            Woohoo, you're reading this text in
                                            a modal!
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button
                                                variant="secondary"
                                                onClick={handleClose}
                                            >
                                                Close
                                            </Button>
                                            <Button
                                                variant="primary"
                                                onClick={handleClose}
                                            >
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                                <div className="media-body mb-5 text-white">
                                    <h4
                                        className="nameprofile
                                "
                                    >
                                        {user && user.name}
                                    </h4>
                                    <p className="small mb-4">
                                        {" "}
                                        <i className="fas fa-map-marker-alt mr-2" />
                                        {user && user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-4 d-flex justify-content-end text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block"></h5>
                                    <small className="text-muted">
                                        {" "}
                                        <i className="fas fa-image mr-1" />
                                        Photos
                                    </small>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">
                                        745
                                    </h5>
                                    <small className="text-muted">
                                        {" "}
                                        <i className="fas fa-user mr-1" />
                                        Followers
                                    </small>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">
                                        340
                                    </h5>
                                    <small className="text-muted">
                                        {" "}
                                        <i className="fas fa-user mr-1" />
                                        Following
                                    </small>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 py-3">
                            <h5 className="mb-0">About</h5>
                            <div className="p-4 rounded shadow-sm bg-light">
                                <p className="font-italic mb-0">
                                    Phone: {user && user.phone}
                                </p>
                                <p className="font-italic mb-0">
                                    Cin :{user && user.cin}
                                </p>
                                <p className="font-italic mb-0">Photographer</p>
                            </div>
                        </div>
                        <div className="py-4 px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="mb-0">Recent photos</h5>
                                <a href="#" className="btn btn-link text-muted">
                                    Show all
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-2 pr-lg-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div className="col-lg-6 mb-2 pl-lg-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div className="col-lg-6 pr-lg-1 mb-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div className="col-lg-6 pl-lg-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
