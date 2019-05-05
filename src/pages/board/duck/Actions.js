import types from "./Types";

const load = payload => ( { type: types.LOAD, payload } );

const editBoard = payload => ( { type: types.EDIT_BOARD, payload } );

const createColumn = payload => ( { type: types.CREATE_COLUMN, payload } );

const editColumn = payload => ( { type: types.EDIT_COLUMN, payload } );

const removeColumn = payload => ( { type: types.REMOVE_COLUMN, payload } );

const createTask = payload => ( { type: types.CREATE_TASK, payload } );

const editTask = payload => ( { type: types.EDIT_TASK, payload } );

const removeTask = payload => ( { type: types.REMOVE_TASK, payload } );

export default {
    load,
    editBoard,
    createColumn,
    editColumn,
    removeColumn,
    createTask,
    editTask,
    removeTask,
};
