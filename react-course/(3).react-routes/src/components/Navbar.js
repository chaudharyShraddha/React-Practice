import React from "react";
import {NavLink} from "react-router-dom";

function Navbar (){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to="/" className="nav-item nav-link" activeClassName="text-danger" exact={true}>Home</NavLink>
                    <NavLink  to="/portfolio" className="nav-item nav-link" activeClassName="text-danger" exact={true}>Portfolio</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link" activeClassName="text-danger">Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
