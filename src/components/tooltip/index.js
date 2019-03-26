import React from "react";
import PropTypes from "prop-types";

const Tooltip = ( {
    text,
    placement,
    children,
    hidden,
} ) => (

    hidden ? ( <div>{ children }</div> )
        : (
            <div className={ placement === "right" ? "tooltip is-tooltip-right" : "tooltip" } data-tooltip={ text }>
                { children }
            </div>
        )
);

Tooltip.defaultProps = {
    hidden: false,
};
Tooltip.propTypes = {
    placement: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    hidden: PropTypes.bool,
};

export default Tooltip;
