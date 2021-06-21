import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Errorrs from "../Error/Errorrs";
import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap";
import { add_products, get_products } from "../../Redux/Action/Supplier";
import { get_all_products } from "../../Redux/Action/Product";
import Product from "../Product/Product";
const Profilesupp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_products());
    }, [dispatch]);

    const supplier = useSelector((state) => state.supplierReducer.supplier);
    const errors = useSelector((state) => state.supplierReducer.error);
    const product = useSelector((state) => state.supplierReducer.products);
    const [alert, setAlert] = useState(true);
    const [name, setName] = useState("");
    const [Cat, setCat] = useState("");
    const [description, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [show, setShow] = useState(false);
    const [uploading, setUploading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const uploadFileHandler = async (e) => {
        try {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("image", file);
            setUploading(true);

            const config = {
                headers: {
                    "Content-Type": "multypart/form-data",
                },
            };

            const result = await axios.post("/project/image", formData, config);
            setImage(result.data);

            setUploading(false);
        } catch (error) {
            console.log(error);
            setUploading(false);
        }
    };

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h3>hi supplier</h3>
                <img
                    style={{ height: "100px" }}
                    className="img-fluid"
                    src="https://uctlanguagecentre.com/wp-content/uploads/2020/05/avatar.png"
                    alt="user"
                />
                <h3 className="name"> </h3>
                <h4 className="title">name:{supplier && supplier.name}</h4>
                <h4 className="title">email:{supplier && supplier.email}</h4>
                <h4 className="title">phone:{supplier && supplier.phone}</h4>
                <div>
                    {" "}
                    {/* <Button
                        onClick={() => {
                            // dispatch(get_all_products());
                            // dispatch(get_products());
                        }}
                    >
                        get all pruct
                    </Button> */}
                </div>
                <Button variant="primary" onClick={handleShow}>
                    Add product
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {errors.length > 0 ? (
                            <Errorrs error={errors[0]} />
                        ) : null}
                        <Form>
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
                                <option value="Accessories">Accessories</option>
                                <option value="Electronics">Electronics</option>
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
                            <Form.File
                                id="image-file"
                                label="Choose Photo"
                                custom
                                onChange={uploadFileHandler}
                            ></Form.File>
                        </Form>
                        {uploading && (
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => {
                                dispatch(
                                    add_products(
                                        name,
                                        Cat,
                                        description,
                                        price,
                                        image
                                    )
                                );
                                setName("");
                                setCat("");
                                setDesc("");
                                setPrice("");
                                setImage("");
                            }}
                        >
                            add product
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                {" "}
                {product.length > 0
                    ? product.map((el, i) => (
                          <Product key={i} product={el} edit={true} />
                      ))
                    : null}{" "}
            </div>
        </>
    );
};

export default Profilesupp;
