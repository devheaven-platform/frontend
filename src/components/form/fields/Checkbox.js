/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const FormFieldCheckbox = ( {
    label,
    name,
    type,
    value,
    error,
    touched,
    onChange,
} ) => (
    <div className="field">
        <div className="control">
            <label htmlFor={ name } className="checkbox">
                <input
                    type={ type }
                    name={ name }
                    checked={ value }
                    onChange={ e => onChange( e.currentTarget.checked ) }
                    onBlur={ e => onChange( e.currentTarget.checked ) }
                    className={ classNames( { "is-danger": touched && error } ) }
                />
                { ` ${ label }` }
            </label>
        </div>

        { ( touched && error ) && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

FormFieldCheckbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.bool,
    error: PropTypes.string,
    touched: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

FormFieldCheckbox.defaultProps = {
    value: false,
    error: null,
    touched: false,
};

export default FormFieldCheckbox;
/* eslint-enable jsx-a11y/label-has-for */
