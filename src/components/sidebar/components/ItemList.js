import React, { useState } from "react";
import { PropTypes } from "prop-types";

const ItemList = ( { icon, label, children } ) => {
    const [ isOpen, setIsOpen ] = useState( false );
    return (
        <li>
            <div role="presentation" className="sidebar-item" onClick={ () => setIsOpen( !isOpen ) }>
                <i className={ `fas fa-${ icon }` } />
                <span>{label}</span>
            </div>
            <ul className={ isOpen ? "sidebar-item-list active" : "sidebar-item-list" }>
                { children }
            </ul>
        </li>
    );
};

ItemList.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
};

ItemList.defaultProps = {
    children: null,
};

export default ItemList;
