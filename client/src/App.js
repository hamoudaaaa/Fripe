// import "./App.css";
import Login from "./Component/Login/Login";
import { Route, Switch } from "react-router-dom";
import Landpage from "./Component/Landpage/Landpage";
import Registre from "./Component/Registre/Registre";
import Profile from "./Component/Profile/Profile";
import Error from "./Component/Error/Error";
import Privaterouter from "./Router/Privaterouter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "./Redux/Action/User";
import Navbar from "./Component/Navbar/Navbar";
import Registresupp from "./Component/Registre/Registresupp";
import Loginsupp from "./Component/Login/Loginsupp";
import profilesupp from "./Component/Profile/profilesupp";
import { currentsupp } from "./Redux/Action/Supplier";
import { get_all_products } from "./Redux/Action/Product";
import Admin from "./Component/Admin/admin";
import Productdetail from "./Component/Productdetail/Productdetail";
import Carts from "./Component/Carts/Carts";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_all_products());
        dispatch(current());
        dispatch(currentsupp());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Landpage} />
                <Route path="/login" component={Login} />
                <Route path="/loginsupp" component={Loginsupp} />
                <Route path="/registre" component={Registre} />
                <Route path="/registresupp" component={Registresupp} />
                <Privaterouter path="/profile" component={Profile} />
                <Privaterouter path="/admin" component={Admin} />
                <Privaterouter path="/cart" component={Carts} />
                <Privaterouter path="/profilesupp" component={profilesupp} />
                <Route path="/productdetail" component={Productdetail} />

                <Route path="/*" component={Error} />
            </Switch>
        </div>
    );
}

export default App;
