import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { CELL_TYPES } from "../../../tables/Types";

const TableCellSort = ( {
    id,
    type,
    label,
    sort,
    onClick,
} ) => (
    <div role="presentation" className="table-cell-sort" onClick={ () => type !== CELL_TYPES.CONTEXT_MENU && onClick() }>
        <span>{ label }</span>
        { sort.id === id && (
            <span className="icon">
                <i className={ classNames( `fas fa-${ sort.direction === 1 ? "sort-up" : "sort-down" }` ) } />
            </span>
        ) }
    </div>
);

TableCellSort.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    sort: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        direction: PropTypes.oneOf( [ -1, 1 ] ).isRequired,
    } ).isRequired,
    onClick: PropTypes.func.isRequired,
};

TableCellSort.defaultProps = {
    label: null,
};

export default TableCellSort;
