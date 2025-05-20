import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div class="container-fluid">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">

                        <a className="navbar-brand" href="#">CRUD</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to="/"  className="nav-link active" aria-current="page" href="#">Home</NavLink>
                                <a className="nav-link" href="#">Features</a>
                                <a className="nav-link" href="#">Pricing</a>
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;