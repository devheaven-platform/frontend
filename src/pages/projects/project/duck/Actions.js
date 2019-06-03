import types from "./Types";

const load = args => ( { type: types.LOAD, payload: args } );

const loadClients = payload => ( { type: types.LOAD_CLIENTS, payload } );

const editProject = payload => ( { type: types.EDIT_PROJECT, payload } );

const archiveProject = payload => ( { type: types.ARCHIVE_PROJECT, payload } );

const addMember = payload => ( { type: types.ADD_MEMBER, payload } );

const removeMember = payload => ( { type: types.REMOVE_MEMBER, payload } );

const createMilestone = payload => ( { type: types.CREATE_MILESTONE, payload } );

const removeMilestone = payload => ( { type: types.REMOVE_MILESTONE, payload } );

const createBoard = payload => ( { type: types.CREATE_BOARD, payload } );

const archiveBoard = payload => ( { type: types.ARCHIVE_BOARD, payload } );

export default {
    load,
    editProject,
    archiveProject,
    addMember,
    removeMember,
    createMilestone,
    removeMilestone,
    createBoard,
    archiveBoard,
    loadClients,
};
