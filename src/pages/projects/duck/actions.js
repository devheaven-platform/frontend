import { createFormAction } from "redux-form-saga";
import types from "./types";

const createProject = createFormAction( types.CREATE_PROJECT );

const archiveProject = payload => ( { type: types.ARCHIVE_PROJECT, payload } );

const getAllProjects = payload => ( { type: types.GET_ALL_PROJECTS, payload } );

const getAllClients = payload => ( { type: types.GET_ALL_CLIENTS, payload } );

export default {
    getAllProjects,
    createProject,
    archiveProject,
    getAllClients,
};
