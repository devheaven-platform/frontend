import { createFormAction } from "redux-form-saga";
import types from "./types";

const createBoard = createFormAction( types.CREATE_BOARD );

const getBoards = payload => ( { type: types.GET_BOARDS, payload } );

const deleteBoard = payload => ( { type: types.DELETE_BOARD, payload } );

export default {
    getBoards, createBoard, deleteBoard,
};
