import { createFormAction } from "redux-form-saga";
import types from "./types";

const createBoard = createFormAction( types.CREATE_BOARD );

const getBoards = payload => ( { type: types.GET_BOARDS, payload } );
const getBoardColumns = payload => ( { type: types.GET_COLUMNS, payload } );
const getColumnTasks = payload => ( { type: types.GET_TASKS, payload } );

export default {
    getBoards, createBoard, getBoardColumns, getColumnTasks,
};
