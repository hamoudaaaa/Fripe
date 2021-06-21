import { FAIL_CARTS, GET_CARTS, LOAD_CARTS } from "../Constant/Cart";

const InitialState = {
    products: [],
    Carts: [],
    isload: false,
};

const cartReducer = (State = InitialState, { type, payload }) => {
    switch (type) {
        case LOAD_CARTS:
            return { ...State, isload: true };
        case GET_CARTS: //andek newcard token msg
            return {
                ...State,
                isload: false,
                Carts: payload.productss,
            };

        case FAIL_CARTS:
            return { ...State, error: payload, isload: false };

        default:
            return State;
    }
};
export default cartReducer;
