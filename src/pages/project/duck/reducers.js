import { combineReducers } from "redux";
import { Axios } from "common/helpers";
import types from "./types";

const defaultState = {
    isCollapsed: false,
    isConnected: null,
    isAuthenticated: false,
    roles: [],
    projects: []
};

const projects = ( state = defaultState.projects, { type , payload } ) => {
    if ( type === types.CREATEPROJECT_SUCCESS ) {
        return [...state, payload];
    }
    if ( type === types.DELETEPROJECT_SUCCESS ) {
        return state.filter( p => p.id !== payload);
    }

    return state;
};

export default combineReducers( {
    projects
} );