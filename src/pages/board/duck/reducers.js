import { combineReducers } from "redux";
import types from "./types";

const defaultState = {
    board: null,
    boardId: "",
};
const board = ( state = defaultState.board, { type, payload } ) => {
    if ( type === types.GET_BOARD_SUCCESS ) {
        return payload;
    }

    if ( type === types.CREATE_COLUMN_SUCCESS ) {
        return {
            ...state,
            columns: [ ...state.columns, payload ],
        };
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
