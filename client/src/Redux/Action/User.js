import axios from "axios";
import {
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
} from "../Constant/Userconstant";

export const registre = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const res = await axios.post("/project/user", user);
        dispatch({ type: REGISTER_USER, payload: res.data });
        // BECH TRAJA3 user token msg
        history.push("/profile");
    } catch (error) {
        // error.response.data.errors.map((el) => alert(el.msg));
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
        // dispatch({ type: FAIL_USER, payload: error.response.data.errors });
        // console.log(error);
    }
};
export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const res = await axios.post("/project/user/login", user); //user bech yabbath emil password
        dispatch({ type: LOGIN_USER, payload: res.data }); // token user msg

        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        const res = await axios.get("/project/user/current", config);
        dispatch({ type: CURRENT_USER, payload: res.data }); // msg user
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};

export const videErrorsuser = () => {
    return {
        type: "VIDE_ERRORS",
    };
};
