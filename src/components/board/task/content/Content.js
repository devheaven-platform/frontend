import React from "react";
import PropTypes from "prop-types";

const BoardTaskContent = ( { description } ) => (
    <div className="board-task-content">
        <p>{ description }</p>
    </div>
);

BoardTaskContent.propTypes = {
    description: PropTypes.string.isRequired,
};

export default BoardTaskContent;
