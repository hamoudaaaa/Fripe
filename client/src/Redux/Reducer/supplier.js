import {
    CURRENT_SUPPLIER,
    FAIL_SUPPLIER,
    GET_PRODUCTS,
    LOAD_SUPPLIER,
    LOGIN_SUPPLIER,
    LOGOUT_SUPPLIER,
    REGISTER_SUPPLIER,
} from "../Constant/SupplierConstant";

const initialState = {
    supplier: {},
    isauthsup: false,
    isload: false,
    error: [],
    products: [],
};
const supplierReducer = (State = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_SUPPLIER:
            return { ...State, isload: true };
        case REGISTER_SUPPLIER: //andek supplier token msg
            localStorage.setItem("token", payload.token);
            return {
                ...State,
                isload: false,
                isauthsup: true,
                supplier: payload.supplier,
            };

        case LOGIN_SUPPLIER: // andek supplier token msg
            localStorage.setItem("token", payload.token);
            return {
                ...State,
                supplier: payload.supplier,
                isauthsup: true,
                isload: false,
            };
        case FAIL_SUPPLIER:
            return { ...State, error: payload, isload: false, isauth: false };
        case CURRENT_SUPPLIER:
            return { ...State, supplier: payload.supplier, isauthsup: true };
        case LOGOUT_SUPPLIER:
            localStorage.removeItem("token");
            return { ...State, supplier: {}, isauthsup: false };
        case GET_PRODUCTS:
            return { ...State, products: payload.products };

        default:
            return State;
    }
};
export default supplierReducer;
