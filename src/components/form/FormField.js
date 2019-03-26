import React from "react";
import { Field } from "redux-form";
import {
    string,
    node,
} from "prop-types";

import {
    InputField,
    HiddenField,
    TextAreaField,
    SelectField,
    CheckBoxField,
    RadioField,
} from "./components";

const FormField = ( {
    name,
    type,
    label,
    children,
    ...rest
} ) => {
    switch ( type ) {
    case "hidden":
        return (
            <Field name={ name } type={ type } component={ HiddenField } { ...rest } /> );
    case "textarea":
        return (
            <Field name={ name } type={ type } label={ label } component={ TextAreaField } { ...rest } />
        );
    case "select":
        return (
            <Field name={ name } type={ type } label={ label } component={ SelectField } { ...rest }>
                { children }
            </Field>
        );
    case "checkbox":
        return (
            <Field name={ name } type={ type } label={ label } component={ CheckBoxField } { ...rest } />
        );
    case "radio":
        return (
            <Field name={ name } type={ type } label={ label } component={ RadioField } { ...rest }>
                { children }
            </Field>
        );

    default:
        return (
            <Field name={ name } type={ type } label={ label } component={ InputField } { ...rest } />
        );
    }
};

FormField.defaultProps = {
    children: null,
};

FormField.propTypes = {
    name: string.isRequired,
    type: string.isRequired,
    label: string.isRequired,
    children: node,
};

export default FormField;
