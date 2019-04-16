import types from "./types";

const init = payload => ( { type: types.INIT, payload } );

const createProject = payload => ( { type: types.CREATE_PROJECT, payload } );

const editProject = payload => ( { type: types.EDIT_PROJECT, payload } );

const archiveProject = payload => ( { type: types.ARCHIVE_PROJECT, payload } );
const updateBoard = payload => ( { type: types.UPDATE_BOARD, payload } );

export default {
    init,
    createProject,
    editProject,
    updateBoard,
    archiveProject,
};
