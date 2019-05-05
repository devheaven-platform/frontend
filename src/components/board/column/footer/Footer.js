import React from "react";
import PropTypes from "prop-types";

import createTaskForm from "forms/CreateTask";
import ModalForm from "../../../modal/form/Form";

const BoardColumnFooter = ( { errors, createTask } ) => (
    <div className="board-column-footer">
        <ModalForm
            title="Add Task"
            description="Add a new task to this column."
            button={ ( { onClick } ) => (
                <button
                    type="button"
                    className="is-link"
                    onClick={ onClick }
                >
                    Add new task
                </button>
            ) }
            fields={ createTaskForm }
            errors={ errors }
            submit={ createTask }
        />
    </div>
);

BoardColumnFooter.propTypes = {
    errors: PropTypes.shape(),
    createTask: PropTypes.func.isRequired,
};

BoardColumnFooter.defaultProps = {
    errors: {},
};

export default BoardColumnFooter;
