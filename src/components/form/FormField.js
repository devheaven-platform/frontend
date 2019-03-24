import React from "react";
import { Field } from "redux-form";
import {
    string,
    node,
} from "prop-types";

import {
    InputField,
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
            <Field name={ name } type={ type } label={ label } component={ RadioField } { ...rest } />
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
