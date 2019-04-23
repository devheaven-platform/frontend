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
};

const project = ( state = defaultState.project, { type, payload } ) => {
    if ( type === types.GET_PROJECT_SUCCESS ) {
        return payload;
    }
    if ( type === types.GET_PROJECT_ERROR ) {
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
        const stateWithoutBoard = state.filter( b => b.id !== payload.id );
        return [ ...stateWithoutBoard, payload ];
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
    boards, projectId, isArchived, project,
} );
/* eslint-enable complexity */
