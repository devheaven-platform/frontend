import { createFormAction } from "redux-form-saga";
import types from "./types";

const createBoard = createFormAction( types.CREATE_BOARD );

const getBoards = payload => ( { type: types.GET_BOARDS, payload } );

export default {
    getBoards, createBoard,
};
