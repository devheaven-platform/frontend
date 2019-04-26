import types from "./types";

const getBoard = payload => ( { type: types.GET_BOARD, payload } );

const createColumn = payload => ( { type: types.CREATE_COLUMN, payload } );

const deleteColumn = payload => ( { type: types.DELETE_COLUMN, payload } );

const createTask = payload => ( { type: types.CREATE_TASK, payload } );

const deleteTask = payload => ( { type: types.DELETE_TASK, payload } );

export default {
    getBoard,
    createColumn,
    deleteColumn,
    createTask,
    deleteTask,
};
