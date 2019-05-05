import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { ModalForm } from "components";
import EditTask from "../../../forms/EditTask";

const Task = ( {
    errors,
    task,
    index,
    onTaskRemove,
    onTaskEdit,
    columnId,
} ) => (
    <Draggable
        key={ task.id }
        draggableId={ task.id }
        index={ index }
    >
        {provided => (
            <div
                ref={ provided.innerRef }
                { ...provided.draggableProps }
                { ...provided.dragHandleProps }
            >
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {task.name}
                        </p>
                        <div className="card-header-icon" aria-label="delete task">
                            <span className="icon">
                                <button type="button" className="button has-background-white" onClick={ () => onTaskRemove( { id: task.id, columnId } ) }>
                                    <i className="fa fa-trash has-text-danger" aria-hidden="true" />
                                </button>
                                {/* <DropDown
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
                                            onTaskRemove( { id: task.id, columnId } );
                                        }
                                    } }
                                /> */}
                            </span>
                        </div>
                    </header>
                    <div className="card-content has-padding-2 has-break-word">
                        <p>{task.description}</p>
                        <p>
                            {`Hours: ${ task.hours }`}
                        </p>
                    </div>
                    <footer className="card-footer">
                        <ModalForm
                            title="Edit Task"
                            description="Edit a Task."
                            className="card-footer-item has-background-white has-text-primary has-padding-1"
                            fields={ EditTask( task ) }
                            defaults={ task }
                            errors={ errors }
                            submit={ values => onTaskEdit( { values, id: task.id, columnId } ) }
                        />
                    </footer>
                </div>
            </div>
        )}
    </Draggable>
);

Task.propTypes = {
    errors: PropTypes.shape(),
    task: PropTypes.shape( {} ).isRequired,
    columnId: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onTaskEdit: PropTypes.func.isRequired,
    onTaskRemove: PropTypes.func.isRequired,
};

Task.defaultProps = {
    errors: {},
};

export default Task;
