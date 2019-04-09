import { combineReducers } from "redux";
import types from "./types";

const defaultState = {
    projects: [],
};

const projects = ( state = defaultState.projects, { type, payload } ) => {
    if ( type === types.CREATE_PROJECT_SUCCESS ) {
        return [ ...state, payload ];
    }
    if ( type === types.GET_ALL_PROJECTS_SUCCESS ) {
        return payload;
    }
    if ( type === types.GET_ALL_PROJECTS_ERROR ) {
        return payload;
    }
    if ( type === types.ARCHIVE_PROJECT_SUCCESS ) {
        return state.filter( p => p.id !== payload );
    }
    return state;
};

export default combineReducers( {
    projects,
} );
