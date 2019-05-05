import React from "react";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Column from "./column/Column";

class Board extends React.Component {
    static propTypes = {
        board: PropTypes.shape( {} ).isRequired,
        onBoardEdit: PropTypes.func.isRequired,
        onTaskAdd: PropTypes.func.isRequired,
        onTaskEdit: PropTypes.func.isRequired,
        onTaskRemove: PropTypes.func.isRequired,
        onColumnEdit: PropTypes.func.isRequired,
        onColumnRemove: PropTypes.func.isRequired,
    };

    reorder = ( list, startIndex, endIndex ) => {
        const [ removed ] = list.splice( startIndex, 1 );
        list.splice( endIndex, 0, removed );

        return list.map( m => m.id );
    }

    move = ( source, destination, droppableSource, droppableDestination ) => {
        const [ removed ] = source.splice( droppableSource.index, 1 );

        destination.splice( droppableDestination.index, 0, removed );

        const result = {};
        result[ droppableSource.droppableId ] = source.map( m => m.id );
        result[ droppableDestination.droppableId ] = destination.map( m => m.id );

        return result;
    };

    getListStyle = () => ( {
        // background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: 8,
        width: "has-min-width-2 has-max-width-2",
        height: "has-min-height-1",
    } );

    onDragEnd = ( result ) => {
        const {
            type, source, destination,
        } = result;
        const { board, onColumnEdit, onBoardEdit } = this.props;

        // dropped outside the list
        if ( !destination ) {
            return;
        }

        if ( type === "task" ) {
            if ( source.droppableId === destination.droppableId ) {
                const tasks = this.reorder( board.columns.find( c => c.id === source.droppableId ).tasks, source.index, destination.index );
                onColumnEdit( { id: source.droppableId, tasks } );
            } else {
                const movedTasks = this.move( board.columns.find( c => c.id === source.droppableId ).tasks, board.columns.find( c => c.id === destination.droppableId ).tasks, source, destination );
                onColumnEdit( { id: source.droppableId, tasks: movedTasks[ source.droppableId ] } );
                onColumnEdit( { id: destination.droppableId, tasks: movedTasks[ destination.droppableId ] } );
            }
        } else if ( source.index !== destination.index ) {
            const columns = this.reorder( board.columns, source.index, destination.index );
            onBoardEdit( { id: board.id, columns } );
        }
    }

    render() {
        const {
            board, onColumnRemove, onTaskAdd, onTaskEdit, onTaskRemove,
        } = this.props;
        return (
            <DragDropContext onDragEnd={ this.onDragEnd }>
                <Droppable droppableId={ board.id } direction="horizontal" type="column">
                    {provided => (
                        <div
                            { ...provided.droppableProps }
                            ref={ provided.innerRef }
                        >
                            <div className="columns is-multiline cards-container" id="sectioncontainer">
                                { board.columns.map( ( column, index ) => (
                                    <Draggable
                                        key={ column.id }
                                        draggableId={ column.id }
                                        index={ index }
                                    >
                                        {prov => (
                                            <div
                                                ref={ prov.innerRef }
                                                { ...prov.draggableProps }
                                                { ...prov.dragHandleProps }
                                                className="has-min-width-2 has-max-width-2"
                                            >
                                                <Column
                                                    key={ column.id }
                                                    column={ column }
                                                    onColumnRemove={ onColumnRemove }
                                                    onTaskAdd={ onTaskAdd }
                                                    onTaskEdit={ onTaskEdit }
                                                    onTaskRemove={ onTaskRemove }
                                                    getListStyle={ this.getListStyle }
                                                />
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Draggable>
                                ) )}
                            </div>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Board;
