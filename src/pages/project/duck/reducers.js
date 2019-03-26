import { combineReducers } from "redux";
import types from "./types";

const defaultState = {
    boards: [],
    projectId: "",
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

export default combineReducers( {
    boards, projectId,
} );
