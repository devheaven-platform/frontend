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
    return state;
};

const milestones = ( state = defaultState.milestones, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.project.milestones;
    }
    return state;
};

const boards = ( state = defaultState.boards, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.project.boards;
    }
    return state;
};

const users = ( state = defaultState.users, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return selectors.users( payload.users );
    }
    return state;
};

const errors = ( state = defaultState.errors, { type, payload } ) => {
    if ( type === types.EDIT_PROJECT ) {
        return {};
    }
    if ( type === types.EDIT_PROJECT_ERROR ) {
        return payload;
    }
    if ( type === types.CREATE_MILESTONE ) {
        return {};
    }
    if ( type === types.CREATE_MILESTONE_ERROR ) {
        return payload;
    }
    if ( type === types.CREATE_BOARD ) {
        return {};
    }
    if ( type === types.CREATE_BOARD_ERROR ) {
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
} );
