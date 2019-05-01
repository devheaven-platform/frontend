import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NavbarLeft from "./left/Left";
import NavbarCenter from "./center/Center";
import NavbarRight from "./right/Right";

const Navbar = ( { isAuthenticated } ) => (
    <nav className="navbar is-light is-fixed-top">
        <div className="navbar-items">
            <NavbarLeft />
            <NavbarCenter />
            <NavbarRight isAuthenticated={ isAuthenticated } />
        </div>
    </nav>
);

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

const mSTP = ( { app: { isAuthenticated } } ) => ( { isAuthenticated } );

export default connect( mSTP )( Navbar );
