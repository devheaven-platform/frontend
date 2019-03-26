import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bool } from "prop-types";

import { Item, ItemList } from "./components";
import Tooltip from "../tooltip";

const Sidebar = ( { isCollapsed } ) => (
    <nav className={ isCollapsed ? "sidebar collapsed" : "sidebar" }>
        <ul className="sidebar-content">
            <Tooltip text="Home" placement="right" hidden={ !isCollapsed }>
                <Item to="/" icon="home" label="Home" />
            </Tooltip>
            <ItemList icon="boxes" label="Projects" hidden={ !isCollapsed }>
                <Tooltip text="Project 1" placement="right" hidden={ !isCollapsed }>
                    <Item to="/project/1" icon="box-open" label="Project 1" />
                </Tooltip>
                <Tooltip text="Project 2" placement="right" hidden={ !isCollapsed }>
                    <Item to="/project/2" icon="box-open" label="Project 2" />
                </Tooltip>
                <Tooltip text="Project 3" placement="right" hidden={ !isCollapsed }>
                    <Item to="/project/3" icon="box-open" label="Project 3" />
                </Tooltip>
                <Tooltip text="All projects" placement="right" hidden={ !isCollapsed }>
                    <Item to="/projects" icon="ellipsis-h" label="All" />
                </Tooltip>
            </ItemList>

            <Tooltip text="Invoices" placement="right" hidden={ !isCollapsed }>
                <Item to="/invoices" icon="file-invoice-dollar" label="Invoices" />

            </Tooltip>

            <Tooltip text="Clients" placement="right" hidden={ !isCollapsed }>
                <Item to="/clients" icon="users" label="Clients" />
            </Tooltip>
            <Tooltip text="Agenda" placement="right" hidden={ !isCollapsed }>
                <Item to="/agenda" icon="calendar-alt" label="Agenda" />
            </Tooltip>
            <Tooltip text="Email" placement="right" hidden={ !isCollapsed }>
                <Item to="/email" icon="envelope" label="Email" />
            </Tooltip>
            <ItemList icon="building" label="HR">
                <Tooltip text="Hours" placement="right" hidden={ !isCollapsed }>
                    <Item to="/hours" icon="clock" label="Hours" />
                </Tooltip>
                <Tooltip text="Personnel" placement="right" hidden={ !isCollapsed }>
                    <Item to="/personnel" icon="user-friends" label="Personnel" />
                </Tooltip>
            </ItemList>
        </ul>
    </nav>
);

Sidebar.propTypes = {
    isCollapsed: bool.isRequired,
};

const mSTP = ( { app: { isCollapsed } } ) => ( { isCollapsed } );

export default withRouter( connect( mSTP, null )( Sidebar ) );
