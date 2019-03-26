import React from "react";
import { node, func, bool } from "prop-types";

const Footer = ( { footer, setIsOpen, enableCancelButton } ) => (
    footer && (
        <div className="modal-footer">
            { footer }
            {
                enableCancelButton && (
                    <button type="button" className="button is-secondary has-margin-left-1" onClick={ setIsOpen }>Cancel</button>
                )
            }
        </div>
    )
);

Footer.defaultProps = {
    footer: null,
};

Footer.propTypes = {
    footer: node,
    setIsOpen: func.isRequired,
    enableCancelButton: bool.isRequired,
};

export default Footer;
