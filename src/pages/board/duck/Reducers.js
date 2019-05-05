/* eslint complexity: 0 */
import { combineReducers } from "redux";

import types from "./Types";

const defaultState = {
    board: null,
    errors: {},
};

const board = ( state = defaultState.board, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload;
    }
    if ( type === types.EDIT_BOARD_SUCCESS ) {
        return payload;
    }
    if ( type === types.CREATE_COLUMN_SUCCESS ) {
        return {
            ...state,
            columns: [ ...state.columns, payload ],
        };
    }
    if ( type === types.EDIT_COLUMN_SUCCESS ) {
        return {
            ...state,
            columns: [
                ...state.columns.map( column => ( column.id === payload.id ? payload : column ) ),
            ],
        };
    }
    if ( type === types.REMOVE_COLUMN_SUCCESS ) {
        return {
            ...state,
            columns: [ ...state.columns.filter( c => c.id !== payload ) ],
        };
    }
    if ( type === types.CREATE_TASK_SUCCESS ) {
        return {
            ...state,
            columns: [ ...state.columns.map( column => ( column.id !== payload.columnId ? column : {
                ...column,
                tasks: [ ...column.tasks, payload ],
            } ) ) ],
        };
    }
    if ( type === types.EDIT_TASK_SUCCESS ) {
        return {
            ...state,
            columns: [ ...state.columns.map( column => ( column.id !== payload.columnId ? column : {
                ...column,
                tasks: [ ...column.tasks.map( task => ( task.id === payload.id ? payload : task ) ) ],
            } ) ) ],
        };
    }
    if ( type === types.REMOVE_TASK_SUCCESS ) {
        return {
            ...state,
            columns: [ ...state.columns.map( column => ( column.id !== payload.columnId ? column : {
                ...column,
                tasks: [ ...column.tasks.filter( t => t.id !== payload.id ) ],
            } ) ) ],
        };
    }
    return state;
};

const errors = ( state = defaultState.errors, { type, payload } ) => {
    if ( type === types.EDIT_BOARD ) {
        return {};
    }
    if ( type === types.EDIT_BOARD_ERROR ) {
        return payload;
    }
    if ( type === types.CREATE_COLUMN ) {
        return {};
    }
    if ( type === types.CREATE_COLUMN_ERROR ) {
        return payload;
    }
    if ( type === types.EDIT_COLUMN ) {
        return {};
    }
    if ( type === types.EDIT_COLUMN_ERROR ) {
        return payload;
    }
    if ( type === types.CREATE_TASK ) {
        return {};
    }
    if ( type === types.CREATE_TASK_ERROR ) {
        return payload;
    }
    if ( type === types.EDIT_TASK ) {
        return {};
    }
    if ( type === types.EDIT_TASK_ERROR ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    board,
    errors,
} );
