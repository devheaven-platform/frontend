import React from "react";
import { Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";

import BoardColumnHeader from "./header/Header";
import BoardColumnContent from "./content/Content";
import BoardColumnFooter from "./footer/Footer";

const BoardColumn = ( {
    index,
    column,
    errors,
    editColumn,
    removeColumn,
    createTask,
    editTask,
    removeTask,
} ) => (
    <Draggable
        draggableId={ column.id }
        index={ index }
    >
        { provided => (
            <div
                ref={ provided.innerRef }
                { ...provided.draggableProps }
                { ...provided.dragHandleProps }
                className="column box board-column"
            >
                <BoardColumnHeader
                    name={ column.name }
                    columnType={ column.columnType }
                    errors={ errors }
                    editColumn={ editColumn }
                    removeColumn={ removeColumn }
                />
                <BoardColumnContent
                    id={ column.id }
                    tasks={ column.tasks }
                    errors={ errors }
                    editTask={ editTask }
                    removeTask={ removeTask }
                />
                <BoardColumnFooter
                    errors={ errors }
                    createTask={ createTask }
                />
            </div>
        ) }
    </Draggable>
);

BoardColumn.propTypes = {
    index: PropTypes.number.isRequired,
    column: PropTypes.shape( {
        id: PropTypes.string,
        name: PropTypes.string,
        tasks: PropTypes.arrayOf( PropTypes.shape() ),
    } ).isRequired,
    errors: PropTypes.shape(),
    editColumn: PropTypes.func.isRequired,
    removeColumn: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

BoardColumn.defaultProps = {
    errors: {},
};

export default BoardColumn;
