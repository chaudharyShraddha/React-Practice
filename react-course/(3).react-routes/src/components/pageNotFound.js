import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => (
    <div>
        <h3>Page not Found!</h3>
        <NavLink to="/">Go to Home</NavLink>
    </div>
);

export default PageNotFound;