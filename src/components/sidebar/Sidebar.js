import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import SidebarItem from "./item/Item";
import SidebarItemList from "./list/List";
import SidebarToggler from "./toggler/Toggler";

const Sidebar = ( { hasToggle } ) => {
    const [ isCollapsed, setIsCollapsed ] = useState( false );

    return (
        <nav className={ classNames( "sidebar", { collapsed: isCollapsed } ) }>
            <ul className="sidebar-content">
                <SidebarItem to="/" icon="home" label="Home" />
                <SidebarItem to="/projects" icon="boxes" label="Projects" />
                <SidebarItem to="/invoices" icon="file-invoice-dollar" label="Invoices" />
                <SidebarItem to="/clients" icon="users" label="Clients" />
                <SidebarItem to="/agenda" icon="calendar-alt" label="Agenda" />
                <SidebarItem to="/email" icon="envelope" label="Email" />
                <SidebarItemList icon="building" label="HR">
                    <SidebarItem to="/hours" icon="clock" label="Hours" />
                    <SidebarItem to="/employees" icon="user-friends" label="Employees" />
                </SidebarItemList>
                { hasToggle && <SidebarToggler isCollapsed={ isCollapsed } onClick={ () => setIsCollapsed( !isCollapsed ) } /> }
            </ul>
        </nav>
    );
};

Sidebar.propTypes = {
    hasToggle: PropTypes.bool,
};

Sidebar.defaultProps = {
    hasToggle: false,
};

export default withRouter( Sidebar );
