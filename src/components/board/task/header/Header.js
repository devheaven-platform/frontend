import React from "react";
import PropTypes from "prop-types";

import editTaskForm from "forms/EditTask";
import ModalForm from "../../../modal/form/Form";

const BoardTaskHeader = ( {
    name,
    description,
    hours,
    errors,
    editTask,
    removeTask,
} ) => (
    <div className="board-task-header">
        <b>{ name }</b>
        <div>
            <ModalForm
                title="Edit Task"
                description="Edit this task."
                button={ ( { onClick } ) => (
                    <button
                        type="button"
                        className="button is-secondary is-small"
                        onClick={ onClick }
                    >
                        <span className="icon is-small">
                            <i className="fas fa-edit" />
                        </span>
                    </button>
                ) }
                fields={ editTaskForm( { name, description, hours } ) }
                errors={ errors }
                submit={ editTask }
            />
            <button type="button" className="button has-margin-left-2 is-danger is-small" onClick={ removeTask }>
                <span className="icon is-small">
                    <i className="fas fa-trash" />
                </span>
            </button>
        </div>
    </div>
);

BoardTaskHeader.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    errors: PropTypes.shape(),
    editTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

BoardTaskHeader.defaultProps = {
    errors: {},
};

export default BoardTaskHeader;
