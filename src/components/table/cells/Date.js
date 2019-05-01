import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const TableCellDate = ( { value } ) => (
    <td>
        { moment( value ).format( "DD-MM-YYYY" ) }
    </td>
);

TableCellDate.propTypes = {
    value: PropTypes.string.isRequired,
};

export default TableCellDate;
