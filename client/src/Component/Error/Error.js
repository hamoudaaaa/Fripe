import React from "react";
import { Button } from "react-bootstrap";
import "./Error.css";
const Error = (props) => {
    console.log(props);
    return (
        <div className="error">
            <img
                width="800px"
                src="https://www.setauffes.com/wp-content/uploads/2019/03/erreur-page-404.png"
                alt="Error"
            />

            <Button variant="danger" onClick={() => props.history.goBack()}>
                Go Back to Home
            </Button>
        </div>
    );
};

export default Error;
