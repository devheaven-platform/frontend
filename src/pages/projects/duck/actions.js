import types from "./types";

const createProject = payload => ( { type: types.CREATE_PROJECT, payload } );

const archiveProject = payload => ( { type: types.ARCHIVE_PROJECT, payload } );

const getAllProjects = payload => ( { type: types.GET_ALL_PROJECTS, payload } );

export default {
    getAllProjects,
    createProject,
    archiveProject,
};
