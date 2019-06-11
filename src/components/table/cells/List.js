import React from "react";
import PropTypes from "prop-types";

const TableCellList = ( { value } ) => (
    <td>
        <div className="tags">
            {
                value.split( "," ).map( v => ( <span key={ v } className="tag is-info  ">{v.trim()}</span> ) )
            }
        </div>
    </td>
);
TableCellList.propTypes = {
    value: PropTypes.string.isRequired,
};

export default TableCellList;
