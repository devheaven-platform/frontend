/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const FormFieldDate = ( {
    label,
    name,
    type,
    help,
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
                onChange={ e => onChange( e.currentTarget.value ) }
                onBlur={ e => onChange( e.currentTarget.value ) }
                className={ classNames( "input", { "is-danger": touched && error } ) }
            />
        </div>
        <p className="help">{ help }</p>
        { ( touched && error ) && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

FormFieldDate.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    help: PropTypes.string,
    value: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
    ] ),
    error: PropTypes.string,
    touched: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

FormFieldDate.defaultProps = {
    value: "",
    help: null,
    error: null,
    touched: false,
};

export default FormFieldDate;
/* eslint-enable jsx-a11y/label-has-for */
