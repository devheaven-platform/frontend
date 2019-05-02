import React from "react";
import PropTypes from "prop-types";

import { CELL_TYPES, FILTER_TYPES } from "../../../tables/Types";
import { FilterSearch, FilterSelect, FilterRange } from "../filters";

const renderFilter = ( filter, options, onChange ) => {
    switch ( filter.type ) {
        case FILTER_TYPES.SEARCH:
            return <FilterSearch filter={ filter } onChange={ onChange } />;
        case FILTER_TYPES.SELECT:
            return <FilterSelect filter={ filter } options={ options } onChange={ onChange } />;
        case FILTER_TYPES.RANGE_DATE:
            return <FilterRange filter={ filter } onChange={ onChange } />;
        case FILTER_TYPES.RANGE_NUMBER:
            return <FilterRange filter={ filter } onChange={ onChange } />;
        default:
            return <input type="text" name={ filter.id } onChange={ onChange } />;
    }
};

const TableCellFilter = ( {
    type,
    filter,
    options,
    onChange,
} ) => ( type !== CELL_TYPES.CONTEXT_MENU && filter.type !== FILTER_TYPES.NONE ) && (
    <div className="table-cell-filter">
        { renderFilter( filter, options, onChange ) }
    </div>
);

TableCellFilter.propTypes = {
    type: PropTypes.string.isRequired,
    filter: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
            PropTypes.shape(),
        ] ),
    } ),
    options: PropTypes.arrayOf( PropTypes.shape( {
        value: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ] ).isRequired,
        label: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ).isRequired,
    } ) ),
    onChange: PropTypes.func.isRequired,
};

TableCellFilter.defaultProps = {
    filter: null,
};

export default TableCellFilter;
