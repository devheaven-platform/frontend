/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import {
    shape,
    string,
} from "prop-types";

const TextAreaField = ( {
    input,
    label,
    meta: { touched, error },
    ...rest
} ) => (
    <div className="field">
        <label htmlFor={ input.name } className="label">{ label }</label>
        <div className="control">
            <textarea type="textarea" name={ input.name } className={ touched && error ? "textarea is-danger" : "textarea" } { ...input } { ...rest } />
        </div>
        { touched && error && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

TextAreaField.propTypes = {
    input: shape( {} ).isRequired,
    label: string.isRequired,
    meta: shape( {} ).isRequired,
};

export default TextAreaField;
/* eslint-enable jsx-a11y/label-has-for */
