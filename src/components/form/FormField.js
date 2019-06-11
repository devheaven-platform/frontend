/* eslint complexity: 0 */
import React from "react";
import { withFormsy } from "formsy-react";
import PropTypes from "prop-types";

import FIELD_TYPES from "forms/Types";
import {
    FormFieldDate,
    FormFieldList,
    FormFieldInput,
    FormFieldNumber,
    FormFieldSelect,
    FormFieldTextArea,
    FormFieldCheckbox,
    FormFieldMultiSelect,
} from "./fields";

const FormField = ( {
    label,
    name,
    type,
    help,
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
                    help={ help }
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
                    help={ help }
                    value={ value }
                    error={ error }
                    touched={ touched }
                    onChange={ setValue }
                />
            );
        case FIELD_TYPES.DATE:
            return (
                <FormFieldDate
                    label={ label }
                    name={ name }
                    type={ type }
                    help={ help }
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
                    help={ help }
                    value={ value }
                    error={ error }
                    touched={ touched }
                    onChange={ setValue }
                />
            );
        case FIELD_TYPES.LIST:
            return (
                <FormFieldList
                    label={ label }
                    name={ name }
                    help={ help }
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
                    help={ help }
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
                    help={ help }
                    value={ value }
                    error={ error }
                    touched={ touched }
                    onChange={ setValue }
                />
            );
        case FIELD_TYPES.MULTISELECT:
            return (
                <FormFieldMultiSelect
                    label={ label }
                    name={ name }
                    help={ help }
                    options={ options }
                    values={ value }
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
                    help={ help }
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
    help: PropTypes.string,
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
    help: null,
    options: [],
};

export default withFormsy( FormField );
