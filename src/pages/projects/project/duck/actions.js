import types from "./types";

const init = payload => ( { type: types.INIT, payload } );

const create = payload => ( { type: types.CREATE, payload } );

const edit = payload => ( { type: types.EDIT, payload } );

const deleteProject = payload => ( { type: types.DELETE, payload } );


export default {
    init,
    create,
    edit,
    deleteProject,
};