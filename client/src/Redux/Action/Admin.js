import {
    FAIL_ADMIN,
    LOAD_ADMIN,
    GET_USER,
    GET_SUPPLIERS,
} from "../Constant/Admin";
import axios from "axios";
import { get_all_products } from "./Product";
export const get_all_user = () => async (dispatch) => {
    dispatch({ type: LOAD_ADMIN });
    try {
        const result = await axios.get("/project/get_user"); //msg products

        dispatch({ type: GET_USER, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
    }
};

export const delte_user = (id) => async (dispatch) => {
    dispatch({ type: LOAD_ADMIN });
    try {
        const result = await axios.delete(`/project/deleteuser/${id}`);
        dispatch(get_all_user());
    } catch (error) {
        dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
    }
};
export const get_all_supplier = () => async (dispatch) => {
    dispatch({ type: LOAD_ADMIN });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get("/project/get_supplier", config); //msg products

        dispatch({ type: GET_SUPPLIERS, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
    }
};
export const delte_supplier = (id) => async (dispatch) => {
    dispatch({ type: LOAD_ADMIN });
    try {
        const result = await axios.delete(`/project/deletesupplier/${id}`);
        dispatch(get_all_supplier());
        dispatch(get_all_products());
    } catch (error) {
        dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
    }
};
