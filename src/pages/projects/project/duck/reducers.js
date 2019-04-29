/* eslint-disable complexity */
import { combineReducers } from "redux";
import types from "./types";
import actions from "./actions";

const defaultState = {
    boards: [],
    projectId: "",
    project: null,
    isArchived: false,
    isCreateModalOpen: false,
    allMembers: [],
};

const project = ( state = defaultState.project, { type, payload } ) => {
    if ( type === types.GET_PROJECT_SUCCESS ) {
        return payload;
    }
    if ( type === types.GET_PROJECT_ERROR ) {
        return state;
    }
    if ( type === types.REMOVE_MEMBER_SUCCESS ) {
        return payload;
    }
    if ( type === types.ADD_MEMBER_SUCCESS ) {
        return payload;
    }
    if ( type === types.REMOVE_MILESTONE_SUCCESS ) {
        return payload;
    }
    if ( type === types.ADD_MILESTONE_SUCCESS ) {
        if ( state.milestones[ 0 ].id === "yeet" ) {
            return { ...state, milestones: [ payload ] };
        }
        return { ...state, milestones: [ ...state.milestones, payload ] };
    }
    if ( type === types.EDIT_PROJECT_SUCCESS ) {
        return payload;
    }
    return state;
};

const allMembers = ( state = defaultState.allMembers, { type, payload } ) => {
    if ( type === types.GET_ALL_MEMBERS_SUCCESS ) {
        return payload;
    }
    if ( type === types.GET_ALL_MEMBERS_ERROR ) {
        return state;
    }
    return state;
};

const boards = ( state = defaultState.boards, { type, payload } ) => {
    if ( type === types.GET_BOARDS_SUCCESS ) {
        return payload.boards;
    }
    if ( type === types.DELETE_BOARD_SUCCESS ) {
        const boardId = payload.id;
        return state.filter( b => b.id !== boardId );
    }
    if ( type === types.ARCHIVE_BOARD_SUCCESS ) {
        const { id, archived } = payload;
        return state.map( b => (
            b.id === id ? { ...b, archived } : b
        ) );
    }
    if ( type === types.UPDATE_BOARD_SUCCESS ) {
        const stateWithoutBoard = state.filter( b => b.id !== payload.id );
        return [ ...stateWithoutBoard, payload ];
    }
    if ( type === actions.createBoard.SUCCESS ) {
        return [ ...state, payload ];
    }
    return state;
};
const projectId = ( state = defaultState.projectId, { type, payload } ) => {
    if ( type === types.GET_BOARDS ) {
        return payload;
    }
    return state;
};

const isArchived = ( state = defaultState.isArchived, { type } ) => {
    if ( type === types.ARCHIVE_PROJECT_SUCCESS ) {
        return true;
    }
    return state;
};

export default combineReducers( {
    boards, projectId, isArchived, project, allMembers,
} );
/* eslint-enable complexity */
