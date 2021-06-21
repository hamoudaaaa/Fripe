import { combineReducers } from "redux";
import userReducer from "./user";
import supplierReducer from "./supplier";
import productsReducer from "./product";
import cartReducer from "./Carts";
import adminReducer from "./admin";
const rootreducer = combineReducers({
    userReducer,
    supplierReducer,
    productsReducer,
    cartReducer,
    adminReducer,
});

export default rootreducer;
