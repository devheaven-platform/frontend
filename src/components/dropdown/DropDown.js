import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import DropDownAction from "./action/Action";

const DropDown = ( {
    text,
    icon,
    location,
    actions,
    onClick,
} ) => {
    const items = actions.map( action => (
        <DropDownAction
            key={ action.key }
            id={ action.key }
            label={ action.label }
            icon={ action.icon }
            onClick={ onClick }
        />
    ) );

    return (
        <div className={ classNames( "dropdown is-hoverable", { [ `is-${ location }` ]: location != null } ) }>
            <div className="dropdown-trigger">
                <button type="button" className="button">
                    { text ? (
                        <React.Fragment>
                            <span>{text}</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" />
                            </span>
                        </React.Fragment>
                    ) : (
                        <i className={ classNames( `fas fa-${ icon }` ) } />
                    ) }
                </button>
            </div>
            <div className="dropdown-menu">
                <div className="dropdown-content">
                    { items }
                </div>
            </div>
        </div>
    );
};

DropDown.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    location: PropTypes.oneOf( [
        "up",
        "right",
        "left",
    ] ),
    actions: PropTypes.arrayOf( PropTypes.shape( {
        label: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    } ) ).isRequired,
    onClick: PropTypes.func.isRequired,
};

DropDown.defaultProps = {
    text: "",
    icon: "",
    location: null,
};

export default DropDown;
