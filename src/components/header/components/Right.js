import React from "react";
import { NavLink } from "react-router-dom";
import { bool, func } from "prop-types";

const HeaderRight = ( { isAuthenticated, logout } ) => {
    if ( isAuthenticated ) {
        return (
            <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">Account</div>
                    <div className="navbar-dropdown">
                        <NavLink exact to="/profile" className="navbar-item" activeClassName="is-active">Profile</NavLink>
                        <NavLink exact to="/help" className="navbar-item" activeClassName="is-active">Help</NavLink>
                        <NavLink exact to="/settings" className="navbar-item" activeClassName="is-active">Settings</NavLink>
                        <NavLink to="/" className="navbar-item" onClick={ logout }>Logout</NavLink>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="navbar-end">
            <NavLink exact to="/login" className="navbar-item" activeClassName="is-active">Login</NavLink>
        </div>
    );
};

HeaderRight.propTypes = {
    isAuthenticated: bool.isRequired,
    logout: func.isRequired,
};

export default HeaderRight;
