import { createStore, applyMiddleware, compose } from "redux";
// import rootreducer from "./Reducer";
import thunk from "redux-thunk";
import rootreducer from "../Reducer";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootreducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
