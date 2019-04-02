
import types from "./types";
import { createFormAction } from "redux-form-saga";
import types from "./types";

const init = payload => ( { type: types.INIT, payload } );

const createProject = payload => ( { type: types.CREATE, payload } );

const editProject = payload => ( { type: types.EDIT, payload } );

const deleteProject = payload => ( { type: types.DELETE, payload } );

const createBoard = createFormAction( types.CREATE_BOARD );

const getBoards = payload => ( { type: types.GET_BOARDS, payload } );

export default {
    init,
    create,
    edit,
    deleteProject,
    getBoards,
    createBoard,
};
