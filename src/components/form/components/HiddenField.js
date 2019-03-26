/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import {
    shape,
    string,
} from "prop-types";

const HiddenField = ( {
    input,
    type,
    meta: { touched, error },
    ...rest
} ) => (
    <div className="field">
        <div className="control">
            <input type={ type } name={ input.name } className={ touched && error ? "input is-danger" : "input" } { ...input } { ...rest } />
        </div>
        { touched && error && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

HiddenField.propTypes = {
    input: shape( {} ).isRequired,
    type: string.isRequired,
    meta: shape( {} ).isRequired,
};

export default HiddenField;
/* eslint-enable jsx-a11y/label-has-for */
