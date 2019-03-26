import React, { useState } from "react";
import { string, node, bool } from "prop-types";

import {
    Title,
    Description,
    Body,
    Footer,
} from "./components";

const Modal = ( {
    title,
    description,
    body,
    footer,
    enableCancelButton,
} ) => {
    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <React.Fragment>
            <button type="button" className="button is-primary" onClick={ () => setIsOpen( !isOpen ) }>{ title }</button>
            {
                isOpen && (
                    <div className="modal is-active">
                        <div role="presentation" className="modal-background" onClick={ () => setIsOpen( !isOpen ) } />
                        <div className="modal-content">
                            <div className="box">
                                <Title title={ title } />
                                <Description description={ description } />
                                <Body body={ body } />
                                <Footer footer={ footer } setIsOpen={ () => setIsOpen( !isOpen ) } enableCancelButton={ enableCancelButton } />
                            </div>
                        </div>
                        <button type="button" className="modal-close is-large" aria-label="close" onClick={ () => setIsOpen( !isOpen ) } />
                    </div>
                )
            }
        </React.Fragment>
    );
};

Modal.defaultProps = {
    description: null,
    body: null,
    footer: null,
    enableCancelButton: false,
};

Modal.propTypes = {
    title: string.isRequired,
    description: string,
    body: node,
    footer: node,
    enableCancelButton: bool,
};

export default Modal;
