import React from "react";
import { Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";

import BoardTaskHeader from "./header/Header";
import BoardTaskContent from "./content/Content";
import BoardTaskFooter from "./footer/Footer";

const BoardTask = ( {
    index,
    task,
    errors,
    editTask,
    removeTask,
} ) => (
    <Draggable
        draggableId={ task.id }
        index={ index }
    >
        { provided => (
            <div
                ref={ provided.innerRef }
                { ...provided.draggableProps }
                { ...provided.dragHandleProps }
                className="box board-task"
            >
                <BoardTaskHeader
                    name={ task.name }
                    description={ task.description }
                    hours={ task.hours }
                    errors={ errors }
                    editTask={ values => editTask( { ...values, id: task.id } ) }
                    removeTask={ () => removeTask( task ) }
                />
                <BoardTaskContent
                    description={ task.description }
                />
                <BoardTaskFooter
                    hours={ task.hours }
                    assignees={ task.assignees }
                />
            </div>
        ) }
    </Draggable>
);

BoardTask.propTypes = {
    index: PropTypes.number.isRequired,
    task: PropTypes.shape( {
        id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        hours: PropTypes.number,
        assignees: PropTypes.arrayOf( PropTypes.string ),
    } ).isRequired,
    errors: PropTypes.shape(),
    editTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

BoardTask.defaultProps = {
    errors: {},
};

export default BoardTask;
