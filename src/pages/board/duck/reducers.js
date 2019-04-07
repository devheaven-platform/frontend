import { combineReducers } from "redux";
import types from "./types";

const defaultState = {
    board: null,
    boardId: "",
};
const board = ( state = defaultState.board, { type, payload } ) => {
    if ( type === types.GET_BOARD_SUCCESS ) {
        return payload.board;
    }
    return state;
};
const boardId = ( state = defaultState.boardId, { type, payload } ) => {
    if ( type === types.GET_BOARD ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    board, boardId,
} );
