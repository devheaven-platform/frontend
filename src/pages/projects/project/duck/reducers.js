import { combineReducers } from "redux";
import types from "./types";

const defaultState = {
    boards: [],
    projectId: "",
    isArchived: false,
};
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

const isArchived = ( state = defaultState.isArchived, { type } ) => {
    if ( type === types.ARCHIVE_PROJECT_SUCCESS ) {
        return true;
    }
    return state;
};

export default combineReducers( {
    boards, projectId, isArchived,
} );
