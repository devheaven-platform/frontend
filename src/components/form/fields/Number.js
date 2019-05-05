/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const FormFieldNumber = ( {
    label,
    name,
    type,
    value,
    error,
    touched,
    onChange,
} ) => (
    <div className="field">
        <label htmlFor={ name } className="label">{ label }</label>
        <div className="control">
            <input
                type={ type }
                name={ name }
                value={ value }
                onChange={ ( { currentTarget } ) => onChange( currentTarget.value ? parseFloat( currentTarget.value ) : currentTarget.value ) }
                onBlur={ ( { currentTarget } ) => onChange( currentTarget.value ? parseFloat( currentTarget.value ) : currentTarget.value ) }
                className={ classNames( "input", { "is-danger": touched && error } ) }
            />
        </div>
        { ( touched && error ) && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

FormFieldNumber.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
    ] ),
    error: PropTypes.string,
    touched: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

FormFieldNumber.defaultProps = {
    value: "",
    error: null,
    touched: false,
};

export default FormFieldNumber;
/* eslint-enable jsx-a11y/label-has-for */
