import React from "react";
import { NavLink } from "react-router-dom";

export function Portfolio () {
    return(
        <div>
            <h1>My work.</h1>
            <p>Check out the stuf I've Done :</p>
            <NavLink to="/portfolio/1">Item One</NavLink>
            <NavLink to="/portfolio/2">Item Two</NavLink>
        </div>
    )
}

export function PortfolioItem ( props ) {
    return(
        <div>
            <h1>A thing I've done.</h1>
            <p>This page is for the item the id of {props.match.params.id}</p>
        </div>
    )
}
