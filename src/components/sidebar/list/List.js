import React, { useState } from "react";
import classNames from "classnames";
import { PropTypes } from "prop-types";

const SidebarItemList = ( {
    icon,
    label,
    children,
} ) => {
    const [ isCollapsed, setIsCollapsed ] = useState( true );
    return (
        <li>
            <div role="presentation" className="sidebar-item" onClick={ () => setIsCollapsed( !isCollapsed ) }>
                <i className={ classNames( `fas fa-${ icon }` ) } />
                <span>{ label }</span>
            </div>
            <ul className={ classNames( "sidebar-item-list", { collapsed: isCollapsed } ) }>
                { children }
            </ul>
        </li>
    );
};

SidebarItemList.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
};

SidebarItemList.defaultProps = {
    children: null,
};

export default SidebarItemList;
