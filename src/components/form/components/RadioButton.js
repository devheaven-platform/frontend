import React from "react";
import { string, shape } from "prop-types";

// Check out: https://codeburst.io/forms-with-redux-form-v7-part-2-of-2-f44ffee4a34d
const RadioButton = ( {
    name,
    value,
    input,
} ) => {
    debugger;
    return input && (
        <label htmlFor={ name } className="radio">
            <input type="radio" name={ name } value={ value } checked={ input.value === value } onChange={ () => input.onChange( value ) } />
            { ` ${ value }` }
        </label>
    );
};

RadioButton.defaultProps = {
    input: null,
};

RadioButton.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    input: shape( {} ),
};

export default RadioButton;
