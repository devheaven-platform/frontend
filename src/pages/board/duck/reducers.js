import { combineReducers } from "redux";
import types from "./types";

const defaultState = {
    columns: [],
    tasks: [],
    boardId: "",
    columnId: "",
};
const columns = ( state = defaultState.columns, { type, payload } ) => {
    if ( type === types.GET_COLUMNS_SUCCESS ) {
        return payload.columns;
    }
    return state;
};
const tasks = ( state = defaultState.tasks, { type, payload } ) => {
    if ( type === types.GET_TASKS_SUCCESS ) {
        return payload.tasks;
    }
    return state;
};
const boardId = ( state = defaultState.boardId, { type, payload } ) => {
    if ( type === types.GET_COLUMNS ) {
        return payload;
    }
    return state;
};
const columnId = ( state = defaultState.columnId, { type, payload } ) => {
    if ( type === types.GET_TASKS ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    columns, tasks, boardId, columnId,
} );
