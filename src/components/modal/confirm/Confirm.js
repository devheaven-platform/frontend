import React from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";

const ModalConfirm = ( {
    title,
    description,
    isOpen,
    setIsOpen,
    onConfirm,
} ) => (
    <Modal
        title={ title }
        description={ description }
        body={ (
            <React.Fragment>
                <button type="button" className="button is-danger has-margin-right-2" onClick={ onConfirm }>Confirm</button>
                <button type="button" className="button is-light" onClick={ () => setIsOpen( !isOpen ) }>Cancel</button>
            </React.Fragment>
        ) }
        hasCancelButton={ false }
        isOpen={ isOpen }
        setIsOpen={ () => setIsOpen( !isOpen ) }
    />
);

ModalConfirm.defaultProps = {
    description: null,
};

ModalConfirm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default ModalConfirm;
