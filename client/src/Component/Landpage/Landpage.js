import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import "./Landpage.css";
const Landpage = () => {
    const Products = useSelector((state) => state.productsReducer.Products);

    return (
        <div>
            <div className="ahmed">
                {Products.length > 0
                    ? Products.map((el, i) => (
                          <Product key={i} product={el} edit={false} />
                      ))
                    : null}{" "}
            </div>
        </div>
    );
};

export default Landpage;
