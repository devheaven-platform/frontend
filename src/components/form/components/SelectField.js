/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import {
    shape,
    string,
    node,
} from "prop-types";

const SelectField = ( {
    input,
    label,
    meta: { touched, error },
    children,
    ...rest
} ) => (
    <div className="field">
        <label htmlFor={ input.name } className="label">{ label }</label>
        <div className="control">
            <div className={ touched && error ? "select is-danger" : "select" }>
                <select name={ input.name } { ...input } { ...rest }>
                    { children }
                </select>
            </div>
        </div>
        { touched && error && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

SelectField.propTypes = {
    input: shape( {} ).isRequired,
    label: string.isRequired,
    meta: shape( {} ).isRequired,
    children: node.isRequired,
};

export default SelectField;
/* eslint-enable jsx-a11y/label-has-for */
