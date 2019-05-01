import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TableCellText = ( { value, link } ) => (
    <td>
        { link ? (
            <Link to={ link }>{ value }</Link>
        ) : (
            <p>{ value }</p>
        ) }
    </td>
);

TableCellText.propTypes = {
    value: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
    ] ).isRequired,
    link: PropTypes.string,
};

TableCellText.defaultProps = {
    link: null,
};

export default TableCellText;
