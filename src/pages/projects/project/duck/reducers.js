/* eslint-disable complexity */
import { combineReducers } from "redux";
import types from "./types";
import actions from "./actions";

const defaultState = {
    boards: [],
    projectId: "",
    isArchived: false,
    isCreateModalOpen: false,
};
const boards = ( state = defaultState.boards, { type, payload } ) => {
    if ( type === types.GET_BOARDS_SUCCESS ) {
        return payload.boards;
    }
    if ( type === types.DELETE_BOARD_SUCCESS ) {
        const boardId = payload;
        return state.filter( b => b.id !== boardId );
    }
    if ( type === types.ARCHIVE_BOARD_SUCCESS ) {
        const stateWithoutBoard = state.filter( b => b.id !== payload.board.id );
        return [ ...stateWithoutBoard, payload.board ];
    }
    if ( type === types.UPDATE_BOARD_SUCCESS ) {
        const stateWithoutBoard = state.filter( b => b.id !== payload.board.id );
        return [ ...stateWithoutBoard, payload.board ];
    }
    if ( type === actions.createBoard.SUCCESS ) {
        return [ ...state, payload.board ];
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
    boards, projectId, isArchived,
} );
