import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ( { to, icon, label } ) => (
    <li>
        <NavLink exact to={ to } activeClassName="active">
            <i className={ `fas fa-${ icon }` } />
            <span>{label}</span>
        </NavLink>
    </li>
);

Item.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Item;
