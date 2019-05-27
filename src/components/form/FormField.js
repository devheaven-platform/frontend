/* eslint complexity: 0 */
import React from "react";
import { withFormsy } from "formsy-react";
import PropTypes from "prop-types";

import FIELD_TYPES from "forms/Types";
import {
    FormFieldInput,
    FormFieldNumber,
    FormFieldTextArea,
    FormFieldDate,
    FormFieldSelect,
    FormFieldCheckbox,
} from "./fields";

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
        case FIELD_TYPES.NUMBER:
            return (
                <FormFieldNumber
                    label={ label }
                    name={ name }
                    type={ type }
                    value={ value }
                    error={ error }
                    touched={ touched }
                    onChange={ setValue }
                />
            );
        case FIELD_TYPES.TEXTAREA:
            return (
                <FormFieldTextArea
                    label={ label }
                    name={ name }
                    type={ type }
                    value={ value }
                    error={ error }
                    touched={ touched }
                    onChange={ setValue }
                />
            );
        case FIELD_TYPES.DATE:
        case FIELD_TYPES.DATETIME:
            return (
                <FormFieldDate
                    label={ label }
                    name={ name }
                    type={ type }
                    value={ value }
                    error={ error }
                    touched={ touched }
                    onChange={ setValue }
                />
            );
        case FIELD_TYPES.TIME:
            return (
                <FormFieldInput
                    label={ label }
                    name={ name }
                    pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                    type={ type }
                    value={ value }
                    error={ error }
                    touched={ touched }
                    onChange={ setValue }
                />
            );
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
    options: PropTypes.arrayOf( PropTypes.shape( {
        value: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ).isRequired,
        label: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ).isRequired,
    } ) ),
    getValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    getErrorMessage: PropTypes.func.isRequired,
};

FormField.defaultProps = {
    options: [],
};

export default withFormsy( FormField );
