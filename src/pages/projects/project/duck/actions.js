import { createFormAction } from "redux-form-saga";
import types from "./types";

const createBoard = createFormAction( types.CREATE_BOARD );
const getProject = payload => ( { type: types.GET_PROJECT, payload } );
const getBoards = payload => ( { type: types.GET_BOARDS, payload } );
const archiveProject = payload => ( { type: types.ARCHIVE_PROJECT, payload } );
const deleteBoard = payload => ( { type: types.DELETE_BOARD, payload } );
const archiveBoard = payload => ( { type: types.ARCHIVE_BOARD, payload } );
const updateBoard = payload => ( { type: types.UPDATE_BOARD, payload } );

export default {
    getBoards, createBoard, archiveProject, deleteBoard, archiveBoard, updateBoard, getProject,
};
