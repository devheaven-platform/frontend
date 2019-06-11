import React from "react";
import PropTypes from "prop-types";

const generateKey = pre => `${ pre }_${ new Date().getTime() }`;
const TableCellList = ( { value } ) => (
    <td>
        <div className="tags">

            {
                value.split( "," ).map( v => (
                    <span key={ generateKey( "tags" ) } className="tag is-info  ">{v.trim()}</span> ) )
            }

        </div>
    </td>
);
TableCellList.propTypes = {
    value: PropTypes.string.isRequired,
};

export default TableCellList;
