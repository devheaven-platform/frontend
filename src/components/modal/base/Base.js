import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";

const ModalBase = ( {
    title,
    description,
    body,
    footer,
    hasCancelButton,
} ) => {
    const [ isOpen, setIsOpen ] = useState( false );
    return (
        <React.Fragment>
            <button type="button" className="button is-primary" onClick={ () => setIsOpen( !isOpen ) }>{ title }</button>
            <Modal
                title={ title }
                description={ description }
                body={ body }
                footer={ footer }
                hasCancelButton={ hasCancelButton }
                isOpen={ isOpen }
                setIsOpen={ setIsOpen }
            />
        </React.Fragment>
    );
};

ModalBase.defaultProps = {
    description: null,
    footer: null,
    hasCancelButton: false,
};

ModalBase.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    body: PropTypes.node.isRequired,
    footer: PropTypes.node,
    hasCancelButton: PropTypes.bool,
};

export default ModalBase;
