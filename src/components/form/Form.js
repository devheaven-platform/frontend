/* eslint-disable react/button-has-type */
import React from "react";
import Formsy from "formsy-react";
import PropTypes from "prop-types";

import FormPropTypesField from "./propTypes/Field";
import FormField from "./FormField";

const Form = ( {
    fields,
    errors,
    submit,
    setIsChanged,
    hasSubmitButton,
    hasResetButton,
    submitButtonText,
    resetButtonText,
} ) => {
    const items = Object.entries( errors ).map( item => <p key={ item[ 0 ] }>{ item[ 1 ] }</p> );

    return (
        <Formsy
            onChange={ ( values, isChanged ) => setIsChanged( isChanged ) }
            onValidSubmit={ submit }
            className="has-text-left"
        >
            { items.length > 0 && (
                <div className="message is-danger">
                    <div className="message-body">
                        { items }
                    </div>
                </div>
            )}
            { fields && fields.map( ( field ) => {
                const validations = field.validations
                    ? field.validations.reduce( ( res, validation, idx ) => ( { ...res, [ idx ]: validation } ), {} )
                    : {};
                return (
                    <FormField { ...field } key={ field.name } value={ field.default } validations={ validations } />
                );
            } ) }
            { hasSubmitButton && <button type="submit" className="button is-primary has-margin-right-2 has-margin-top-2">{ submitButtonText }</button> }
            { hasResetButton && <button type="reset" className="button is-secondary has-margin-top-2">{ resetButtonText }</button> }
        </Formsy>
    );
};

Form.propTypes = {
    fields: PropTypes.arrayOf( FormPropTypesField ).isRequired,
    errors: PropTypes.shape(),
    submit: PropTypes.func.isRequired,
    setIsChanged: PropTypes.func,
    hasSubmitButton: PropTypes.bool,
    hasResetButton: PropTypes.bool,
    submitButtonText: PropTypes.string,
    resetButtonText: PropTypes.string,
};

Form.defaultProps = {
    setIsChanged: () => {},
    errors: {},
    hasSubmitButton: false,
    hasResetButton: false,
    submitButtonText: "Submit",
    resetButtonText: "Reset",
};

export default Form;
/* eslint-enable react/button-has-type */
