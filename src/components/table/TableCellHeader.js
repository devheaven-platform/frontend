import React from "react";
import PropTypes from "prop-types";

import { TableCellSort, TableCellFilter } from "./cells";

const TableCellHeader = ( {
    id,
    sort,
    filter,
    onSortChange,
    onFilterChange,
    ...column
} ) => (
    <th>
        <TableCellSort
            id={ id }
            type={ column.type }
            label={ column.label }
            sort={ sort }
            onClick={ () => onSortChange( id ) }
        />
        <TableCellFilter
            id={ id }
            type={ column.type }
            filter={ filter }
            options={ column.options }
            onChange={ onFilterChange }
        />
    </th>
);

TableCellHeader.propTypes = {
    id: PropTypes.string.isRequired,
    sort: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        direction: PropTypes.oneOf( [ -1, 1 ] ).isRequired,
    } ).isRequired,
    filter: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
            PropTypes.shape(),
        ] ),
    } ),
    onSortChange: PropTypes.func.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

TableCellHeader.defaultProps = {
    filter: null,
};

export default TableCellHeader;
