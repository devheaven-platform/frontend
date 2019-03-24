/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import {
    shape,
    string,
} from "prop-types";

const RadioField = ( {
    input,
    label,
    type,
    meta: { touched, error },
    ...rest
} ) => (
    <div className="field">
        <label htmlFor={ input.name } className="label">{ label }</label>
        <div className="control">
            <input type={ type } name={ input.name } className={ touched && error ? "input is-danger" : "input" } { ...input } { ...rest } />
        </div>
        { touched && error && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

RadioField.propTypes = {
    input: shape( {} ).isRequired,
    label: string.isRequired,
    type: string.isRequired,
    meta: shape( {} ).isRequired,
};

export default RadioField;
/* eslint-enable jsx-a11y/label-has-for */
