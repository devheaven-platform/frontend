import React from "react";
import PropTypes from "prop-types";

const Modal = ( {
    title,
    description,
    body,
    footer,
    isOpen,
    setIsOpen,
    hasCancelButton,
} ) => (
    isOpen && (
        <div className="modal is-active">
            <div role="presentation" className="modal-background" onClick={ () => setIsOpen( !isOpen ) } />
            <div className="modal-content">
                <div className="box">
                    <h4 className="title has-margin-bottom-2">{ title }</h4>
                    { description && <p className="has-margin-bottom-2">{ description }</p> }
                    <div className="modal-body has-margin-bottom-4">{ body }</div>
                    <div className="modal-footer">
                        { footer }
                        { hasCancelButton && (
                            <button type="button" className="button is-secondary has-margin-left-1" onClick={ () => setIsOpen( !isOpen ) }>Cancel</button>
                        ) }
                    </div>
                </div>
            </div>
            <button type="button" className="modal-close is-large" aria-label="close" onClick={ () => setIsOpen( !isOpen ) } />
        </div>
    )
);

Modal.defaultProps = {
    description: null,
    footer: null,
    hasCancelButton: false,
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    body: PropTypes.node.isRequired,
    footer: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    hasCancelButton: PropTypes.bool,
};

export default Modal;
