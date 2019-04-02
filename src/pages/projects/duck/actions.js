import types from "./types";

const init = payload => ( { type: types.INIT, payload } );

const createProject = payload => ( { type: types.CREATE, payload } );

const editProject = payload => ( { type: types.EDIT, payload } );

const archiveProject = payload => ( { type: types.ARCHIVE, payload } );


export default {
    init,
    createProject,
    editProject,
    archiveProject,
};