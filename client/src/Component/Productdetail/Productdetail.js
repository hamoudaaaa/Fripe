import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    get_all_products,
    get_product_by_id,
} from "../../Redux/Action/Product";
import { Button } from "react-bootstrap";
import { add_to_cart } from "../../Redux/Action/Carts";
import "./Productdetail.css";
import axios from "axios";
import Carts from "../Carts/Carts";
import { get_products } from "../../Redux/Action/Supplier";
const Productdetail = (props, history) => {
    const dispatch = useDispatch();
    const id = props.location.state;
    // const id = props.match.params.id;
    console.log(id);
    const token = localStorage.getItem("token");
    const product = useSelector((state) => state.productsReducer.Product);
    const user = useSelector((state) => state.userReducer.isauth);
    const cart = useSelector((state) => state.cartReducer.Carts);

    useEffect(() => {
        dispatch(get_product_by_id(id));
        dispatch(get_products());
        // if (token) return history.push("/profile");
    }, [dispatch]);

    return (
        <section>
            <div className="supp">
                {" "}
                <h1> name of supplier: {product && product.supplier.name}</h1>
                <h1> name of supplier: {product && product.supplier.email}</h1>
                <h1> name of supplier: {product && product.supplier.phone}</h1>
            </div>
            <div>
                <p>name :{product && product.name}</p>
                <p>categorie :{product && product.categorie}</p>
                <p> description :{product && product.description} </p>
                <p>rating : {product && product.rating}</p>
                <p> price : {product && product.price} </p>{" "}
                {/* <img src={`${product && product.image}`} alt="img" /> */}
                {/* <img src="image-1622768691689.jpg" alt="img" /> */}
                <img src={`${product && product.image}`} alt="productimg" />
            </div>

            {token && user ? (
                <button
                    style={{ alignItems: "center" }}
                    onClick={() => dispatch(add_to_cart(product._id))}
                >
                    Add to cart
                </button>
            ) : null}

            {/* <div>
                {" "}
                {cart.length > 0
                    ? cart.map((el, i) => (
                          //   <Product key={i} product={el} edit={true} />
                          <Carts key={i} cart={el} />
                      ))
                    : null}
            </div> */}

            <Button variant="danger" onClick={() => props.history.goBack()}>
                Go Back
            </Button>
        </section>
    );
};

export default Productdetail;
