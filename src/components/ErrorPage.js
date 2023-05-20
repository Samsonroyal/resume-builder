import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='app'>
            <h3>
                You've not provided your details. Kindly go back to the{" "}
                <Link to='/'>Home</Link>.
            </h3>
        </div>
    );
};

export default ErrorPage;