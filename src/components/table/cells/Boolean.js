import React from "react";
import PropTypes from "prop-types";

const TableCellBoolean = ( { value } ) => (
    <td>
        <p>{ value ? "Yes" : "No" }</p>
    </td>
);

TableCellBoolean.propTypes = {
    value: PropTypes.bool.isRequired,
};

export default TableCellBoolean;
