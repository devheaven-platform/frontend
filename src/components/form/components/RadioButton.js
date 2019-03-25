/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import { Field } from "redux-form";
import { string, shape } from "prop-types";

const RadioButton = ( {
    name,
    value,
    input,
} ) => input && (
    <label htmlFor={ name } className="radio">
        <Field
            component="input"
            name={ name }
            type="radio"
            value={ value }
        />
        { ` ${ value }` }
    </label>
);

RadioButton.defaultProps = {
    input: null,
};

RadioButton.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    input: shape( {} ),
};

export default RadioButton;
/* eslint-enable jsx-a11y/label-has-for */
