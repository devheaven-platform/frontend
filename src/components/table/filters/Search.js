import React from "react";
import PropTypes from "prop-types";

import selectors from "../selectors/Selectors";

const FilterSearch = ( { filter, onChange } ) => (
    <React.Fragment>
        <i className="fas fa-search" />
        <input
            type="text"
            name={ filter.id }
            onChange={ e => onChange( selectors.searchFilterValue( filter, e ) ) }
            placeholder="Search..."
        />
    </React.Fragment>
);

FilterSearch.propTypes = {
    filter: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ),
    } ).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FilterSearch;
