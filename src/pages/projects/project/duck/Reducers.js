/* eslint complexity: 0 */
import { combineReducers } from "redux";

import selectors from "./Selectors";
import types from "./Types";

const defaultState = {
    project: null,
    members: null,
    milestones: null,
    boards: null,
    users: null,
    clients: null,
    errors: {},
};

const project = ( state = defaultState.project, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return {
            ...payload.project,
            members: undefined,
            milestones: undefined,
            boards: undefined,
        };
    }
    if ( type === types.EDIT_PROJECT_SUCCESS ) {
        return {
            ...payload,
            members: undefined,
            milestones: undefined,
            boards: undefined,
        };
    }
    if ( type === types.ARCHIVE_PROJECT_SUCCESS ) {
        return {
            ...payload,
            members: undefined,
            milestones: undefined,
            boards: undefined,
        };
    }
    return state;
};

const members = ( state = defaultState.members, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.project.members;
    }
    if ( type === types.ADD_MEMBER_SUCCESS ) {
        return [ ...state, payload ];
    }
    if ( type === types.REMOVE_MEMBER_SUCCESS ) {
        return state.filter( m => m.id !== payload );
    }
    return state;
};

const milestones = ( state = defaultState.milestones, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.project.milestones;
    }
    if ( type === types.CREATE_MILESTONE_SUCCESS ) {
        return [ ...state, payload ];
    }
    if ( type === types.REMOVE_MILESTONE_SUCCESS ) {
        return state.filter( m => m.id !== payload );
    }
    return state;
};

const boards = ( state = defaultState.boards, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.project.boards;
    }
    if ( type === types.CREATE_BOARD_SUCCESS ) {
        return [ ...state, payload ];
    }
    if ( type === types.ARCHIVE_BOARD_SUCCESS ) {
        return state.map( b => ( b.id === payload.id ? payload : b ) );
    }
    return state;
};

const users = ( state = defaultState.users, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return selectors.users( payload.users );
    }
    return state;
};

const clients = ( state = defaultState.clients, { type, payload } ) => {
    if ( type === types.LOADCLIENTS_SUCCESS ) {
        return selectors.clients( payload );
    }
    return state;
};

const errors = ( state = defaultState.errors, { type, payload } ) => {
    if ( [
        types.EDIT_PROJECT,
        types.CREATE_MILESTONE,
        types.CREATE_BOARD ].includes( type )
    ) {
        return {};
    }
    if ( [
        types.EDIT_PROJECT_ERROR,
        types.CREATE_MILESTONE_ERROR,
        types.CREATE_BOARD_ERROR ].includes( type )
    ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    project,
    members,
    milestones,
    boards,
    users,
    errors,
    clients,
} );
