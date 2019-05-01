import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { FILTER_TYPES } from "../../../tables/Types";
import selectors from "../selectors/Selectors";

const FilterRange = ( { filter, onChange } ) => (
    <React.Fragment>
        <i className={ classNames(
            { "fas fa-calendar-alt": filter.type === FILTER_TYPES.RANGE_DATE },
            { "fas fa-sort-numeric-up": filter.type === FILTER_TYPES.RANGE_NUMBER },
        ) }
        />
        <input
            placeholder="Min..."
            name={ `${ filter.id }-min` }
            onChange={ e => onChange( selectors.rangeFilterValue( filter, e ) ) }
            type={ selectors.rangeFilterInputType( filter.type ) }
        />
        <input
            placeholder="Max..."
            name={ `${ filter.id }-max` }
            onChange={ e => onChange( selectors.rangeFilterValue( filter, e ) ) }
            type={ filter.type === FILTER_TYPES.RANGE_DATE ? "date" : "number" }
        />
    </React.Fragment>
);

FilterRange.propTypes = {
    filter: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.shape(),
    } ).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FilterRange;
