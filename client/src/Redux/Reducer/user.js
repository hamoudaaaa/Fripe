const {
    LOAD_USER,
    LOGIN_USER,
    REGISTER_USER,
    FAIL_USER,
    CURRENT_USER,
    LOGOUT_USER,
} = require("../Constant/Userconstant");

const initialState = {
    user: {},
    isauth: false,
    isload: false,
    error: [],
};
const userReducer = (State = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...State, isload: true };
        case REGISTER_USER: //andek user token msg
            localStorage.setItem("token", payload.token);
            return {
                ...State,
                isload: false,
                isauth: true,
                user: payload.user,
            };

        case LOGIN_USER: // andek user token msg
            localStorage.setItem("token", payload.token);
            return {
                ...State,
                user: payload.user,
                isauth: true,
                isload: false,
            };
        case FAIL_USER:
            return { ...State, error: payload, isload: false };
        case CURRENT_USER:
            return { ...State, user: payload.user, isauth: true };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...State, user: {}, isauth: false };
        default:
            return State;
    }
};
export default userReducer;
