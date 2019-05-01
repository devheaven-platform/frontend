import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import SidebarItem from "./item/Item";
import SidebarToggler from "./toggler/Toggler";

const Sidebar = ( { hasToggle } ) => {
    const [ isCollapsed, setIsCollapsed ] = useState( false );

    return (
        <nav className={ classNames( "sidebar", { collapsed: isCollapsed } ) }>
            <ul className="sidebar-content">
                <SidebarItem to="/" icon="home" label="Home" />
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
