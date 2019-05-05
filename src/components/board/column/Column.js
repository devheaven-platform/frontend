import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import { ModalForm } from "components";
import createTaskForm from "forms/CreateTask";
import Task from "../task/Task";
import DropDown from "../../dropdown/DropDown";

const Column = ( {
    errors,
    column,
    onColumnRemove,
    onTaskAdd,
    onTaskEdit,
    onTaskRemove,
    getListStyle,
} ) => (
    <div className="column is-narrow">
        <article className="message is-primary">
            <div className="message-header">
                <p>{column.name}</p>
                <DropDown
                    icon="ellipsis-h"
                    actions={ [ {
                        label: "Edit",
                        key: "EDIT",
                        icon: "edit",
                    }, {
                        label: "Delete",
                        key: "DELETE",
                        icon: "trash",
                    } ] }
                    location="right"
                    onClick={ ( action ) => {
                        if ( action === "EDIT" ) {
                            // TODO
                        } else if ( action === "DELETE" ) {
                            onColumnRemove( column.id );
                        }
                    } }
                />
            </div>
            <div className="message-body">
                <Droppable key={ column.id } droppableId={ column.id } type="task">
                    {( provided, snapshot ) => (
                        <div
                            ref={ provided.innerRef }
                            { ...provided.droppableProps }
                            style={ getListStyle( snapshot.isDraggingOver ) }
                            className="has-min-height-1"
                        >
                            {column.tasks.map( ( task, index ) => (
                                <Task key={ task.id } task={ task } columnId={ column.id } index={ index } onTaskRemove={ onTaskRemove } onTaskEdit={ onTaskEdit } />
                            ) )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </article>
        <ModalForm
            title="Create Task"
            description="Create a new Task."
            className="is-secondary has-margin-left-2"
            fields={ createTaskForm }
            errors={ errors }
            submit={ values => onTaskAdd( { ...values, column: column.id } ) }
        />
    </div>
);

Column.propTypes = {
    errors: PropTypes.shape(),
    column: PropTypes.shape( {} ).isRequired,
    onColumnRemove: PropTypes.func.isRequired,
    onTaskAdd: PropTypes.func.isRequired,
    onTaskEdit: PropTypes.func.isRequired,
    onTaskRemove: PropTypes.func.isRequired,
    getListStyle: PropTypes.func.isRequired,
};

Column.defaultProps = {
    errors: {},
};

export default Column;
