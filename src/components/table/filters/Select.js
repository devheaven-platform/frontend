import React from "react";
import PropTypes from "prop-types";

import selectors from "../selectors/Selectors";

const FilterSelect = ( {
    filter,
    options,
    onChange,
} ) => {
    const items = options.map( option => <option key={ option.value } value={ option.value }>{option.label}</option> );
    return (
        <React.Fragment>
            <i className="fas fa-chevron-circle-down" />
            <select
                name={ filter.id }
                onChange={ e => onChange( selectors.selectFilterValue( filter, e ) ) }
                placeholder="Select..."
            >
                <option value="-1">Select...</option>
                { items }
            </select>
        </React.Fragment>
    );
};

FilterSelect.propTypes = {
    filter: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ),
    } ).isRequired,
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
    onChange: PropTypes.func.isRequired,
};

export default FilterSelect;
