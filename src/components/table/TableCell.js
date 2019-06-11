/* eslint-disable complexity */
import React from "react";
import PropTypes from "prop-types";

import { CELL_TYPES } from "../../tables/Types";
import {
    TableCellText,
    TableCellBoolean,
    TableCellDate,
    TableCellContextMenu,
    TableCellList,
} from "./cells";

const TableCell = ( {
    type,
    value,
    icon,
    link,
    actions,
    onContextMenuClick,
} ) => {
    switch ( type ) {
        case CELL_TYPES.TEXT:
            return (
                <TableCellText
                    value={ value }
                    link={ link }
                />
            );
        case CELL_TYPES.LIST:
            return (
                <TableCellList
                    value={ value }
                />
            );
        case CELL_TYPES.BOOLEAN:
            return (
                <TableCellBoolean
                    value={ value }
                />
            );
        case CELL_TYPES.DATE:
            return (
                <TableCellDate
                    value={ value }
                />
            );
        case CELL_TYPES.CONTEXT_MENU:
            return (
                <TableCellContextMenu
                    icon={ icon }
                    actions={ actions }
                    onClick={ onContextMenuClick }
                />
            );
        default:
            return (
                <td>
                    <p>{ value }</p>
                </td>
            );
    }
};

TableCell.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.shape(),
    ] ),
    icon: PropTypes.string,
    link: PropTypes.string,
    actions: PropTypes.arrayOf( PropTypes.shape( {
        label: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    } ) ),
    onContextMenuClick: PropTypes.func,
};

TableCell.defaultProps = {
    value: null,
    icon: null,
    link: null,
    actions: [],
    onContextMenuClick: () => {},
};

export default TableCell;
