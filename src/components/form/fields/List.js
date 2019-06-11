/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const FormFieldListItem = ( { value, remove } ) => (
    <div className="list-item">
        <span>
            <b>{ value }</b>
        </span>
        <button className="button is-small is-pulled-right is-danger" type="button" onClick={ () => remove( value ) }>
            <i className="fas fa-trash" />
        </button>
    </div>
);

FormFieldListItem.propTypes = {
    value: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
    ] ).isRequired,
    remove: PropTypes.func.isRequired,
};

class FormFieldList extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        help: PropTypes.string,
        value: PropTypes.arrayOf( PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ) ),
        error: PropTypes.string,
        touched: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        value: [],
        help: null,
        error: null,
        touched: false,
    };

    state = {
        input: "",
    }

    onInputChange = e => this.setState( { input: e.currentTarget.value } );

    onAdd = () => {
        const { value, onChange } = this.props;
        const { input } = this.state;
        onChange( [ ...value, input ] );
        this.setState( { input: "" } );
    }

    onRemove = ( e ) => {
        const { value, onChange } = this.props;
        onChange( value.filter( v => v !== e ) );
    }

    render() {
        const {
            label,
            name,
            value,
            help,
            error,
            touched,
        } = this.props;
        const { input } = this.state;

        return (
            <React.Fragment>
                <label htmlFor={ name } className="label">{ label }</label>
                <div className="field has-addons ">
                    <div className="control is-expanded">
                        <input
                            type="input"
                            name={ name }
                            value={ input }
                            onChange={ this.onInputChange }
                            onBlur={ this.onInputChange }
                            className={ classNames( "input", { "is-danger": touched && error } ) }
                        />
                    </div>
                    <p className="control">
                        <button type="button" className="button is-primary" onClick={ this.onAdd }>Add</button>
                    </p>
                    <p className="help">{ help }</p>
                    { ( touched && error ) && (
                        <p className="help is-danger">{ error }</p>
                    ) }
                </div>
                <div className="list">
                    { value.map( v => <FormFieldListItem key={ v } value={ v } remove={ this.onRemove } /> ) }
                </div>
            </React.Fragment>

        );
    }
}

export default FormFieldList;
/* eslint-enable jsx-a11y/label-has-for */
