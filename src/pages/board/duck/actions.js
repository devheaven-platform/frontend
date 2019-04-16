import types from "./types";

const getBoard = payload => ( { type: types.GET_BOARD, payload } );

const createColumn = payload => ( { type: types.CREATE_COLUMN, payload } );

export default {
    getBoard,
    createColumn,
};
