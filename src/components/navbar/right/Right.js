import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarRight = ( { isAuthenticated } ) => {
    if ( isAuthenticated ) {
        return (
            <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">Account</div>
                    <div className="navbar-dropdown">
                        <NavLink exact to="/profile" className="navbar-item" activeClassName="is-active">Profile</NavLink>
                        <NavLink exact to="/help" className="navbar-item" activeClassName="is-active">Help</NavLink>
                        <NavLink exact to="/settings" className="navbar-item" activeClassName="is-active">Settings</NavLink>
                        <NavLink to="/login?logout=true" className="navbar-item">Logout</NavLink>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="navbar-end">
            <NavLink exact to="/login" className="navbar-item">Login</NavLink>
        </div>
    );
};

NavbarRight.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export default NavbarRight;
