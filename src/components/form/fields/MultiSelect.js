/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const FormFieldMutliSelect = ( {
    label,
    name,
    value,
    options,
    error,
    touched,
    onChange,
} ) => (
    <div className="field">
        <label htmlFor={ name } className="label">{ label }</label>
        <div className="select is-multiple">
            <select
                name={ name }
                value={ value }
                multiple
                onChange={ e => onChange( Array.from( e.currentTarget.selectedOptions ).map( o => o.value ) ) }
                onBlur={ e => onChange( Array.from( e.currentTarget.selectedOptions ).map( o => o.value ) ) }
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

FormFieldMutliSelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.arrayOf( PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
    ] ) ),
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

FormFieldMutliSelect.defaultProps = {
    value: [],
    error: null,
    touched: false,
};

export default FormFieldMutliSelect;
/* eslint-enable jsx-a11y/label-has-for */
