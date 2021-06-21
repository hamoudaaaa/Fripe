import axios from "axios";

import {
    CURRENT_SUPPLIER,
    FAIL_SUPPLIER,
    GET_PRODUCTS,
    LOAD_SUPPLIER,
    LOGIN_SUPPLIER,
    LOGOUT_SUPPLIER,
    REGISTER_SUPPLIER,
} from "../Constant/SupplierConstant";
import { get_all_products } from "./Product";

export const registresupp = (supplier, history) => async (dispatch) => {
    dispatch({ type: LOAD_SUPPLIER });
    try {
        const res = await axios.post("/project/supplier", supplier);
        dispatch({ type: REGISTER_SUPPLIER, payload: res.data }); // BECH TRAJA3 supplier token msg
        history.push("/profilesupp");
    } catch (error) {
        // error.response.data.errors.map((el) => alert(el.msg));
        dispatch({ type: FAIL_SUPPLIER, payload: error.response.data.errors });
        // dispatch({ type: FAIL_USER, payload: error.response.data.errors });
        // console.log(error);
    }
};
export const loginsupp = (supplier, history) => async (dispatch) => {
    dispatch({ type: LOAD_SUPPLIER });
    try {
        const res = await axios.post("project/supplier/login", supplier); //user bech yabbath emil password
        dispatch({ type: LOGIN_SUPPLIER, payload: res.data }); // token supplier msg

        history.push("/profilesupp");
    } catch (error) {
        dispatch({ type: FAIL_SUPPLIER, payload: error.response.data.errors });
        // console.log(error);
    }
};
export const get_products = () => async (dispatch) => {
    dispatch({ type: LOAD_SUPPLIER });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get("project/supplier", config);
        dispatch({ type: GET_PRODUCTS, payload: result.data }); //   products
    } catch (error) {
        dispatch({ type: FAIL_SUPPLIER, payload: error.response.data.errors });
    }
};
export const add_products =
    (name, categorie, description, price, image) => async (dispatch) => {
        dispatch({ type: LOAD_SUPPLIER });
        try {
            const config = {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            };
            const rating = 0;
            await axios.post(
                "/project/supplier/addproduct",
                { name, categorie, description, price, image, rating },
                config
            );
            dispatch(get_products());
            dispatch(get_all_products());
            dispatch(videErrorsupp());
        } catch (error) {
            dispatch({
                type: FAIL_SUPPLIER,
                payload: error.response.data.errors,
            });
        }
    };
export const delete_product = (id) => async (dispatch) => {
    dispatch({ type: LOAD_SUPPLIER });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        await axios.delete(`/project/supplier/deleteproduct/${id}`, config);
        dispatch(get_products());
        dispatch(videErrorsupp());
    } catch (error) {
        dispatch({
            type: FAIL_SUPPLIER,
            payload: error.response.data.errors,
        });
    }
};
export const update_product = (id, modification) => async (dispatch) => {
    dispatch({ type: LOAD_SUPPLIER });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        await axios.put(
            `/project/supplier/updateproduct/${id}`,
            modification,
            config
        );
        dispatch(get_products());
        dispatch(videErrorsupp());
    } catch (error) {
        dispatch({
            type: FAIL_SUPPLIER,
            payload: error.response.data.errors,
        });
    }
};

export const currentsupp = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        const res = await axios.get("/project/supplier/current", config);
        dispatch({ type: CURRENT_SUPPLIER, payload: res.data }); // msg user
    } catch (error) {
        dispatch({ type: FAIL_SUPPLIER, payload: error.response.data.errors });
    }
};

export const logoutsupp = () => {
    return {
        type: LOGOUT_SUPPLIER,
    };
};

export const videErrorsupp = () => {
    return {
        type: "VIDE_ERRORS_SUPPLIER",
    };
};
