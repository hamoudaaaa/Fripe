import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Alert } from "react-bootstrap";

const Errorrs = ({ error }) => {
    const [alert, setAlert] = useState(true);

    useEffect(() => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 3000);
    }, [error]);
    return alert && <Alert variant="danger">{error.msg}</Alert>;
};

export default Errorrs;
