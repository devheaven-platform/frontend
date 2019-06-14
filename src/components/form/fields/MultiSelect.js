/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";

class FormFieldMultiSelect extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        help: PropTypes.string,
        values: PropTypes.arrayOf( PropTypes.oneOfType( [
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
    }

    static defaultProps = {
        values: [],
        help: null,
        error: null,
        touched: false,
    };

    onCheckboxChange = ( value ) => {
        const { values, onChange } = this.props;
        onChange( values.includes( value )
            ? values.filter( f => f !== value )
            : [ ...values, value ] );
    }

    render() {
        const {
            label,
            name,
            help,
            options,
            error,
            touched,
            values,
        } = this.props;
        return (
            <div className="field">
                <label htmlFor={ name } className="label">
                    { label }
                </label>
                { options.map( option => (
                    <label key={ option.value } htmlFor={ option.value } className="checkbox has-width-50">
                        <input
                            id={ option.value }
                            type="checkbox"
                            key={ option.value }
                            value={ option.value }
                            checked={ values.includes( option.value ) }
                            onChange={ e => this.onCheckboxChange( e.currentTarget.value ) }
                        />
                        { ` ${ option.label }` }
                    </label>
                ) ) }
                <p className="help">{ help }</p>
                { ( touched && error ) && (
                    <p className="help is-danger">{ error }</p>
                ) }
            </div>
        );
    }
}

export default FormFieldMultiSelect;
/* eslint-enable jsx-a11y/label-has-for */
