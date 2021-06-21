import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button } from "react-bootstrap";
import { get_cart, delete_to_cart } from "../../Redux/Action/Carts";
const Carts = () => {
    const dispatch = useDispatch();
    const Produit = useSelector((state) => state.cartReducer.Carts);
    const [total, setTotal] = useState(0);
    useEffect(() => dispatch(get_cart()), [dispatch]);

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>
                {" "}
                Total:
                {Produit.reduce((a, b) => a + b.Produit.price * b.quantite, 0)}
            </h2>
            {Produit.length > 0 ? (
                Produit.map((el, i) => (
                    <div key={i} className="product-cart">
                        <img
                            style={{ width: "40px" }}
                            src={el.Produit.image}
                            alt="product"
                        />
                        <div className="prod-details">
                            <h6>Name:</h6>
                            <p>{el.Produit.name}</p>
                            <h6>Price:</h6>
                            <h6>quantite</h6>
                            <p>{el.quantite}</p>
                            <p>{el.Produit.price}DT</p>
                        </div>

                        <Button
                            variant="danger"
                            onClick={() => {
                                dispatch(delete_to_cart(el.Produit._id));
                                dispatch(get_cart());
                            }}
                        >
                            X
                        </Button>
                    </div>
                ))
            ) : (
                <Alert variant="danger">Empty</Alert>
            )}
        </div>
    );
};

export default Carts;
