import React from "react";
import { withFormsy } from "formsy-react";
import PropTypes from "prop-types";

import FIELD_TYPES from "forms/Types";
import { FormFieldInput, FormFieldSelect, FormFieldCheckbox } from "./fields";

const FormField = ( {
    label,
    name,
    type,
    options,
    getValue,
    setValue,
    isPristine,
    getErrorMessage,
} ) => {
    const value = getValue();
    const touched = !isPristine();
    const error = getErrorMessage();

    switch ( type ) {
        case FIELD_TYPES.SELECT:
            return (
                <FormFieldSelect
                    label={ label }
                    name={ name }
                    type={ type }
                    options={ options }
                    value={ value }
                    error={ error }
                    touched={ touched }
                    onChange={ setValue }
                />
            );
        case FIELD_TYPES.CHECKBOX:
            return (
                <FormFieldCheckbox
                    label={ label }
                    name={ name }
                    type={ type }
                    value={ value }
                    error={ error }
                    touched={ touched }
                    onChange={ setValue }
                />
            );
        default:
            return (
                <FormFieldInput
                    label={ label }
                    name={ name }
                    type={ type }
                    value={ value }
                    error={ error }
                    touched={ touched }
                    onChange={ setValue }
                />
            );
    }
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.oneOfType( [
        PropTypes.arrayOf( PropTypes.string ),
        PropTypes.arrayOf( PropTypes.number ),
    ] ),
    getValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    getErrorMessage: PropTypes.func.isRequired,
};

FormField.defaultProps = {
    options: [],
};

export default withFormsy( FormField );
