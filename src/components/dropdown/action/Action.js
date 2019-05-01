import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const DropDownAction = ( {
    id,
    label,
    icon,
    onClick,
} ) => (
    <React.Fragment>
        <div role="presentation" className="dropdown-item" onClick={ () => onClick( id ) }>
            <span className="icon">
                <i className={ classNames( `fas fa-${ icon }` ) } />
            </span>
            <span>{ label }</span>
        </div>
    </React.Fragment>
);

DropDownAction.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default DropDownAction;
