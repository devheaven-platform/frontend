import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

const SidebarItem = ( {
    to,
    icon,
    label,
} ) => (
    <li>
        <NavLink exact to={ to } className="sidebar-item" activeClassName="active">
            <i className={ classNames( `fas fa-${ icon }` ) } />
            <span>{ label }</span>
        </NavLink>
    </li>
);

SidebarItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default SidebarItem;
