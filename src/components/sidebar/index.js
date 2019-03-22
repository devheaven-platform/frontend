import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bool } from "prop-types";

import { Item, ItemList } from "./components";

const Sidebar = ( { isCollapsed } ) => (
    <nav className={ isCollapsed ? "sidebar collapsed" : "sidebar" }>
        <ul className="sidebar-content">
            <Item to="/" icon="home" label="Home" />
            <ItemList icon="boxes" label="Projects">
                <Item to="/projects/1" icon="box-open" label="Project 1" />
                <Item to="/projects/2" icon="box-open" label="Project 2" />
                <Item to="/projects/3" icon="box-open" label="Project 3" />
                <Item to="/projects" icon="ellipsis-h" label="All" />
            </ItemList>
            <Item to="/invoices" icon="file-invoice-dollar" label="Invoices" />
            <Item to="/clients" icon="users" label="Clients" />
            <Item to="/agenda" icon="calendar-alt" label="Agenda" />
            <Item to="/email" icon="envelope" label="Email" />
            <ItemList icon="building" label="HR">
                <Item to="/hours" icon="clock" label="Hours" />
                <Item to="/personnel" icon="user-friends" label="Personnel" />
            </ItemList>
        </ul>
    </nav>
);

Sidebar.propTypes = {
    isCollapsed: bool.isRequired,
};

const mSTP = ( { app: { isCollapsed } } ) => ( { isCollapsed } );

export default withRouter( connect( mSTP, null )( Sidebar ) );
