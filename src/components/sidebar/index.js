import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bool } from "prop-types";

import Item from "./components";

const Sidebar = ( { isCollapsed } ) => (
    <nav className={ isCollapsed ? "sidebar collapsed" : "sidebar" }>
        <ul className="sidebar-content">
            <Item to="/" icon="home" label="Home" />
            <Item to="/account" icon="user" label="Account" />
        </ul>
    </nav>
);

Sidebar.propTypes = {
    isCollapsed: bool.isRequired,
};

const mSTP = ( { app: { isCollapsed } } ) => ( { isCollapsed } );

export default withRouter( connect( mSTP, null )( Sidebar ) );
