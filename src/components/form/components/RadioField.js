/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import {
    shape,
    string,
    node,
} from "prop-types";

const RadioField = ( {
    input,
    label,
    meta: { touched, error },
    children,
} ) => (
    <div className="field">
        <label htmlFor={ input.name } className="label">{ label }</label>
        <div className="control">
            { React.Children.map( children, child => React.cloneElement( child, { input } ) ) }
        </div>
        { touched && error && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

RadioField.propTypes = {
    input: shape( {} ).isRequired,
    label: string.isRequired,
    meta: shape( {} ).isRequired,
    children: node.isRequired,
};

export default RadioField;
/* eslint-enable jsx-a11y/label-has-for */
