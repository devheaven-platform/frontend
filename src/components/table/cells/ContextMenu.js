import React from "react";
import PropTypes from "prop-types";

import DropDown from "../../dropdown/DropDown";

const TableCellContextMenu = ( { icon, actions, onClick } ) => (
    <td>
        <DropDown
            icon={ icon }
            actions={ actions }
            location="right"
            onClick={ onClick }
        />
    </td>
);

TableCellContextMenu.propTypes = {
    icon: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf( PropTypes.shape( {
        label: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    } ) ).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TableCellContextMenu;
