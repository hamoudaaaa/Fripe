import axios from "axios";

import {
    LOAD_PRODUCTS,
    GET_ALL_PRODUCTS,
    FAIL_PRODUCTS,
    GET_PRODUCT,
} from "../Constant/Product";

export const get_all_products = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCTS });
    try {
        const result = await axios.get("/project/product"); //msg products

        dispatch({ type: GET_ALL_PRODUCTS, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_PRODUCTS, payload: error.response.data.errors });
    }
};

export const get_product_by_id = (id, history) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCTS });
    try {
        const result = await axios.get(`/project/product/get_product/${id}`); //msg product

        dispatch({ type: GET_PRODUCT, payload: result.data });
        history.push("/registre");
    } catch (error) {
        dispatch({ type: FAIL_PRODUCTS, payload: error });
    }
};
