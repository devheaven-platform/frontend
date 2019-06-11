import React from "react";
import PropTypes from "prop-types";

class TableCellIcon extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
    };

    renderIcon() {
        const { value } = this.props;
        switch ( value ) {
            case "MONEY":
                return (
                    <div>
                        <span className="icon">
                            <i className="fas fa-dollar-sign" />
                        </span>
                        {" "}
                        Money
                    </div>
                );
            case "HOURS":
                return (
                    <div>
                        <span className="icon">
                            <i className="fas fa-clock" />

                        </span>
                        {" "}
                        Hours
                    </div>
                );
            case "STORY_POINTS":
                return (
                    <div>
                        <span className="icon">
                            <i className="fas fa-plus-circle" />
                        </span>
                        {" "}
                        Story Points
                    </div>
                );
            default:
                return value;
        }
    }

    render() {
        return (
            <td>
                { this.renderIcon() }
            </td>
        );
    }
}

export default TableCellIcon;
