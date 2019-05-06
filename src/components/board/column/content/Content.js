import React from "react";
import { Droppable } from "react-beautiful-dnd";
import PropTypes from "prop-types";

import BoardTask from "../../task/Task";

const BoardColumnContent = ( {
    id,
    tasks,
    errors,
    editTask,
    removeTask,
} ) => {
    const items = tasks.map( ( task, index ) => (
        <BoardTask
            key={ task.id }
            index={ index }
            task={ task }
            errors={ errors }
            editTask={ editTask }
            removeTask={ removeTask }
        />
    ) );

    return (
        <Droppable droppableId={ id } direction="vertical" type="task">
            { provided => (
                <div
                    { ...provided.droppableProps }
                    ref={ provided.innerRef }
                    className="board-column-content"
                >
                    { items }
                    { provided.placeholder }
                </div>
            ) }
        </Droppable>
    );
};

BoardColumnContent.propTypes = {
    id: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf( PropTypes.shape() ).isRequired,
    errors: PropTypes.shape(),
    editTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

BoardColumnContent.defaultProps = {
    errors: {},
};

export default BoardColumnContent;
