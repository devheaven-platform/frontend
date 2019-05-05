/* eslint complexity: 0 */
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import PropTypes from "prop-types";

import BoardColumn from "./column/Column";
import utils from "./utils/Utils";

class Board extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        columns: PropTypes.arrayOf( PropTypes.shape( {
            id: PropTypes.string,
            name: PropTypes.string,
            tasks: PropTypes.arrayOf( PropTypes.shape() ),
        } ) ).isRequired,
        errors: PropTypes.shape(),
        editBoard: PropTypes.func.isRequired,
        editColumn: PropTypes.func.isRequired,
        removeColumn: PropTypes.func.isRequired,
        createTask: PropTypes.func.isRequired,
        editTask: PropTypes.func.isRequired,
        removeTask: PropTypes.func.isRequired,
    }

    static defaultProps ={
        errors: {},
    }

    onDragEnd = ( result ) => {
        const { type, source, destination } = result;
        const {
            id,
            columns,
            editBoard,
            editColumn,
        } = this.props;

        // Dropped outside the list
        if ( !destination ) {
            return;
        }

        // Moved to same location
        if (
            destination.droppableId === source.droppableId
            && destination.index === source.index
        ) {
            return;
        }

        if ( type === "task" ) {
            if ( source.droppableId === destination.droppableId ) {
                const tasks = utils.reorder( columns.find( c => c.id === source.droppableId ).tasks, source.index, destination.index );
                editColumn( { id: source.droppableId, tasks } );
            } else {
                const movedTasks = utils.move( columns.find( c => c.id === source.droppableId ).tasks, columns.find( c => c.id === destination.droppableId ).tasks, source, destination );
                editColumn( { id: source.droppableId, tasks: movedTasks[ source.droppableId ] } );
                editColumn( { id: destination.droppableId, tasks: movedTasks[ destination.droppableId ] } );
            }
        } else if ( type === "column" ) {
            editBoard( { id, columns: utils.reorder( columns, source.index, destination.index ) } );
        }
    }

    render() {
        const {
            id,
            columns,
            errors,
            editColumn,
            removeColumn,
            createTask,
            editTask,
            removeTask,
        } = this.props;
        const items = columns.map( ( column, index ) => (
            <BoardColumn
                key={ column.id }
                index={ index }
                column={ column }
                errors={ errors }
                editColumn={ values => editColumn( { ...values, id: column.id } ) }
                removeColumn={ () => removeColumn( column ) }
                createTask={ values => createTask( { ...values, column: column.id } ) }
                editTask={ values => editTask( { ...values, column: column.id } ) }
                removeTask={ values => removeTask( { ...values, column: column.id } ) }
            />
        ) );

        return (
            <DragDropContext onDragEnd={ this.onDragEnd }>
                <Droppable droppableId={ id } direction="horizontal" type="column">
                    { provided => (
                        <div
                            { ...provided.droppableProps }
                            ref={ provided.innerRef }
                            className="columns board-container"
                        >
                            { items }
                            { provided.placeholder }
                        </div>
                    ) }
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Board;
