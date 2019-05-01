import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const SidebarToggler = ( { isCollapsed, onClick } ) => (
    <li>
        <div role="presentation" className="sidebar-item" onClick={ onClick }>
            <i className={ classNames( { "fas fa-angle-double-right": isCollapsed, "fas fa-angle-double-left": !isCollapsed } ) } />
            <span>Collapse sidebar</span>
        </div>
    </li>
);

SidebarToggler.propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SidebarToggler;
