/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import {
    shape,
    string,
} from "prop-types";

const CheckBoxField = ( {
    input,
    label,
    meta: { touched, error },
    ...rest
} ) => (
    <div className="field">
        <div className="control">
            <label htmlFor={ input.name } className="checkbox">
                <input name={ input.name } type="checkbox" { ...input } { ...rest } />
                { ` ${ label }` }
            </label>
        </div>
        { touched && error && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

CheckBoxField.propTypes = {
    input: shape( {} ).isRequired,
    label: string.isRequired,
    meta: shape( {} ).isRequired,
};

export default CheckBoxField;
/* eslint-enable jsx-a11y/label-has-for */
