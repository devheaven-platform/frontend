/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const FormFieldSelect = ( {
    label,
    name,
    help,
    value,
    options,
    error,
    touched,
    onChange,
} ) => (
    <div className="field">
        <label htmlFor={ name } className="label">{ label }</label>
        <div className="select">
            <select
                name={ name }
                value={ value || "-1" }
                onChange={ e => onChange( e.currentTarget.value !== "-1" ? e.currentTarget.value : undefined ) }
                onBlur={ e => onChange( e.currentTarget.value !== "-1" ? e.currentTarget.value : undefined ) }
                className={ classNames( "input", { "is-danger": touched && error } ) }
            >
                <option value="-1" disabled>Select a value</option>
                { options.map( option => <option key={ option.value } value={ option.value }>{ option.label }</option> ) }
            </select>
        </div>
        <p className="help">{ help }</p>
        { ( touched && error ) && (
            <p className="help is-danger">{ error }</p>
        ) }
    </div>
);

FormFieldSelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    help: PropTypes.string,
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
    help: null,
    error: null,
    touched: false,
};

export default FormFieldSelect;
/* eslint-enable jsx-a11y/label-has-for */
