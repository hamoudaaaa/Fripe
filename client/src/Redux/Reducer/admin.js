import {
    FAIL_ADMIN,
    GET_SUPPLIERS,
    GET_USER,
    LOAD_ADMIN,
} from "../Constant/Admin";

const InitialState = {
    user: [],
    supplier: [],
    loaduser: false,
    errors: [],
};

// PURE FUNCTION

const adminReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case LOAD_ADMIN:
            return {
                ...state,
                loaduser: true,
            };
        case GET_USER:
            return {
                ...state,
                user: payload.user,
                loaduser: false,
                errors: [],
            };
        case GET_SUPPLIERS:
            return {
                ...state,
                supplier: payload.suppliers,
                loaduser: false,
                errors: [],
            };
        case FAIL_ADMIN:
            return {
                ...state,
                errors: payload,
            };

        default:
            return state;
    }
};

export default adminReducer;
