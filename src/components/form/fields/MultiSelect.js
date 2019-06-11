/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";

class FormFieldMutliSelect extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
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
            options,
            error,
            touched,
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
                            onChange={ e => this.onCheckboxChange( e.currentTarget.value ) }
                            // onBlur={ e => this.onCheckboxChange( e.currentTarget.value ) }
                        />
                        { ` ${ option.label }` }
                    </label>
                ) ) }
                { ( touched && error ) && (
                    <p className="help is-danger">{ error }</p>
                ) }
            </div>
        );
    }
}

// const FormFieldMutliSelect = ( {
//     label,
//     name,
//     value,
//     options,
//     error,
//     touched,
//     onChange,
// } ) => (
//     <div className="field">
//         <label htmlFor={ name } className="label">
//             { label }
//         </label>
//         { options.map( option => (
//             <label htmlFor={ option.value } className="checkbox">
//                 <input
//                     id={ option.value }
//                     type="checkbox"
//                     key={ option.value }
//                     value={ option.value }
//                     onChange={ ( e ) => }
//                     // onChange={ e => onChange( Array.from( e.currentTarget.selectedOptions ).map( o => o.value ) ) }
//                     // onBlur={ e => onChange( Array.from( e.currentTarget.selectedOptions ).map( o => o.value ) ) }
//                 />
//                 {option.value}
//             </label>
//         ) ) }
//         {/* <label htmlFor={ name } className="label">{ label }</label>
//         <div className="select is-multiple">
//             <select
//                 name={ name }
//                 value={ value }
//                 multiple
//                 onChange={ e => onChange( Array.from( e.currentTarget.selectedOptions ).map( o => o.value ) ) }
//                 onBlur={ e => onChange( Array.from( e.currentTarget.selectedOptions ).map( o => o.value ) ) }
//                 className={ classNames( "input", { "is-danger": touched && error } ) }
//             >
//                 { options.map( option => <option key={ option.value } value={ option.value }>{ option.label }</option> ) }
//             </select>
//         </div>
//         { ( touched && error ) && (
//             <p className="help is-danger">{ error }</p>
//         ) } */}
//     </div>
// );

// FormFieldMutliSelect.propTypes = {
//     label: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     value: PropTypes.arrayOf( PropTypes.oneOfType( [
//         PropTypes.string,
//         PropTypes.number,
//     ] ) ),
//     options: PropTypes.arrayOf( PropTypes.shape( {
//         value: PropTypes.oneOfType( [
//             PropTypes.string,
//             PropTypes.number,
//         ] ).isRequired,
//         label: PropTypes.oneOfType( [
//             PropTypes.string,
//             PropTypes.number,
//         ] ).isRequired,
//     } ) ).isRequired,
//     error: PropTypes.string,
//     touched: PropTypes.bool,
//     onChange: PropTypes.func.isRequired,
// };

// FormFieldMutliSelect.defaultProps = {
//     value: [],
//     error: null,
//     touched: false,
// };

export default FormFieldMutliSelect;
/* eslint-enable jsx-a11y/label-has-for */
