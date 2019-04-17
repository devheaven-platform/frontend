import types from "./types";

const getBoard = payload => ( { type: types.GET_BOARD, payload } );

const createColumn = payload => ( { type: types.CREATE_COLUMN, payload } );

const createTask = payload => ( { type: types.CREATE_TASK, payload } );

export default {
    getBoard,
    createColumn,
    createTask,
};
