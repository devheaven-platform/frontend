import React from "react";
import PropTypes from "prop-types";

const TableCellIcon = ( { value } ) => (
    <td>
        {
            TableCellIcon.renderIcon( value )}
    </td>
);
TableCellIcon.renderIcon = ( type ) => {
    switch ( type ) {
        case "MONEY":
            return (
                <div>
                    <span className="icon has-text-success">
                        <i className="fas fa-dollar-sign" />
                    </span>
                    {" "}
                Money
                </div>
            );
        case "HOURS":
            return (
                <div>
                    <span className="icon has-text-info">
                        <i className="fas fa-clock" />

                    </span>
                    {" "}
Hours

                </div>
            ); case "STORY_POINTS":
            return (
                <div>

Story Points
                </div>
            );
        default:
            return type;
    }
};
TableCellIcon.propTypes = {
    value: PropTypes.string.isRequired,
};

export default TableCellIcon;
