import React from "react";
import PropTypes from "prop-types";

const BoardTaskFooter = ( { hours, assignees } ) => (
    <div className="board-task-footer">
        <span className="icon is-small has-text-grey-light">
            <i className="fas fa-hourglass-half" />
            { " " }
            { hours }
        </span>
        { " " }
        <span className="icon is-small has-text-grey-light">
            <i className="fas fa-users" />
            { " " }
            { assignees.length }
        </span>
    </div>
);

BoardTaskFooter.propTypes = {
    hours: PropTypes.number.isRequired,
    assignees: PropTypes.arrayOf( PropTypes.string ).isRequired,
};

export default BoardTaskFooter;
