/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const FormFieldSelect = ( {
    label,
    name,
    type,
    value,
    options,
    error,
    touched,
    onChange,
} ) => (
    <div className="field">
        <label htmlFor={ name } className="label">{ label }</label>
        <div className="control">
            <select
                type={ type }
                name={ name }
                value={ value }
                onChange={ e => onChange( e.currentTarget.value ) }
                onBlur={ e => onChange( e.currentTarget.value ) }
                className={ classNames( "input", { "is-danger": touched && error } ) }
            >
                { options.map( option => <option key={ option.value } value={ option.value }>{ option.label }</option> ) }
            </select>
        </div>
        { ( touched && error ) && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

FormFieldSelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
    ] ),
    options: PropTypes.arrayOf( PropTypes.shape( {
        value: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ).isRequired,
        label: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ).isRequired,
    } ) ).isRequired,
    error: PropTypes.string,
    touched: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

FormFieldSelect.defaultProps = {
    value: "",
    error: null,
    touched: false,
};

export default FormFieldSelect;
/* eslint-enable jsx-a11y/label-has-for */
