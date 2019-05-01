import React from "react";
import PropTypes from "prop-types";

import icon from "assets/svg/icon.svg";

const SidebarHeader = ( { text } ) => (
    <li className="sidebar-header">
        <img src={ icon } alt="icon" />
        <span>{ text}</span>
    </li>
);

SidebarHeader.propTypes = {
    text: PropTypes.string,
};

SidebarHeader.defaultProps = {
    text: "",
};

export default SidebarHeader;
