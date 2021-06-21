import React, { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delete_product, update_product } from "../../Redux/Action/Supplier";
import { Link } from "react-router-dom";
import ReactStars from "react-star-rating-component";
import "./product.css";
import { get_product_by_id } from "../../Redux/Action/Product";
const Product = ({ product, edit, history }) => {
    const [show, setShow] = useState(false);
    const [editShow, setEditshow] = useState(false);
    const [name, setName] = useState(product.name);
    const [categorie, setCat] = useState(product.categorie);
    const [description, setDesc] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handledetail = (e) => {
        if (token) {
            dispatch(get_product_by_id(product._id));
        }
    };
    return (
        <section className="card2">
            {/* <div style={{ textAlign: "flex-end" }}> */}
            <img
                className="movieImg"
                src={`${product.image}`}
                alt="productimg"
            />
            {/* </div> */}
            <div className="product-card">
                <div>
                    <p>{product.name}</p>
                    {/* <p>
                        <h6>description</h6>
                        {product.description}
                    </p> */}
                    <p>
                        <h6>categorie</h6>
                        {product.categorie}
                    </p>

                    <ReactStars
                        edit={!edit}
                        count={5}
                        size={24}
                        value={product.rating}
                        activeColor="#ffd700"
                    />

                    <p>
                        <h6>Price:</h6>
                        {product.price} dt
                    </p>
                </div>
                {edit ? (
                    <>
                        <Button variant="primary" onClick={handleShow}>
                            update product
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit product</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Control
                                    placeholder="Enter Name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                                <Form.Control
                                    as="select"
                                    onChange={(e) => setCat(e.target.value)}
                                >
                                    <option value="other" selected>
                                        Choose categorie
                                    </option>
                                    <option value="Clothes">Clothes</option>
                                    <option value="Accessories">
                                        Accessories
                                    </option>
                                    <option value="Electronics">
                                        Electronics
                                    </option>
                                    <option value="Phones">Phones</option>
                                </Form.Control>
                                <Form.Control
                                    placeholder="Enter description"
                                    onChange={(e) => setDesc(e.target.value)}
                                    value={description}
                                />
                                <Form.Control
                                    placeholder="Enter price $$"
                                    onChange={(e) => setPrice(e.target.value)}
                                    value={price}
                                />
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
                                    onClick={() => {
                                        dispatch(
                                            update_product(product._id, {
                                                name,
                                                categorie,
                                                price,
                                                description,
                                            })
                                        );
                                        handleClose();
                                    }}
                                >
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Button
                            variant="danger"
                            onClick={() =>
                                dispatch(delete_product(product._id))
                            }
                        >
                            Delete
                        </Button>
                    </>
                ) : (
                    <div className="c-body">
                        <Link
                            to={{
                                pathname: "/productdetail",
                                state: product._id,
                            }}
                        >
                            <Button
                                // variant="primary"
                                onClick={() =>
                                    dispatch(get_product_by_id(product._id))
                                }
                            >
                                Show detail for product
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Product;
