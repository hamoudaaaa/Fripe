import { FAIL_CARTS, GET_CARTS, LOAD_CARTS } from "../Constant/Cart";
import axios from "axios";

export const get_cart = (id) => async (dispatch) => {
    dispatch({ type: LOAD_CARTS });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        const res = await axios.get(
            "/project/user/getcart",

            config
        );
        dispatch({ type: GET_CARTS, payload: res.data }); // token user msg
    } catch (error) {
        dispatch({ type: FAIL_CARTS, payload: error.response.data.errors });
    }
};

export const add_to_cart = (id) => async (dispatch) => {
    dispatch({ type: LOAD_CARTS });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        await axios.post(`/project/user/addto_cart/${id}`, {}, config);
        // dispatch({ type: ADD_CARTS, payload: res.data });
        dispatch(get_cart()); // token user msg
    } catch (error) {
        dispatch({ type: FAIL_CARTS, payload: error.response.data.errors });
    }
};
export const delete_to_cart = (id) => async (dispatch) => {
    dispatch({ type: LOAD_CARTS });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        await axios.delete(`/project/user/delete_cart/${id}`, config);

        dispatch(get_cart());
    } catch (error) {
        dispatch({ type: FAIL_CARTS, payload: error.response.data.errors });
    }
};
