import { combineReducers } from "redux";
import { Axios } from "common/helpers";
import types from "./types";

const defaultState = {
    isCollapsed: false,
    isConnected: null,
    isAuthenticated: false,
    roles: [],
    projects: [],
    boards: [],
    projectId: ""
};

const projects = ( state = defaultState.projects, { type , payload } ) => {
    if ( type === types.CREATEPROJECT_SUCCESS ) {
        return [...state, payload];
    }
    if ( type === types.DELETEPROJECT_SUCCESS ) {
        return state.filter( p => p.id !== payload);
    }

const boards = ( state = defaultState.boards, { type, payload } ) => {
    if ( type === types.GET_BOARDS_SUCCESS ) {
        return payload.boards;
    }
    return state;
};
  
const projectId = ( state = defaultState.projectId, { type, payload } ) => {
    if ( type === types.GET_BOARDS ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    projects
    boards, 
  projectId,
} );
