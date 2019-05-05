/* eslint complexity: 0 */
import { combineReducers } from "redux";

import types from "./Types";

const defaultState = {
    board: null,
    columns: null,
    errors: {},
};

const board = ( state = defaultState.board, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return {
            ...payload,
            columns: undefined,
        };
    }
    if ( type === types.EDIT_BOARD_SUCCESS ) {
        return {
            ...payload,
            columns: undefined,
        };
    }
    return state;
};

const columns = ( state = defaultState.columns, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.columns;
    }
    if ( type === types.CREATE_COLUMN_SUCCESS ) {
        return [ ...state, payload ];
    }
    if ( type === types.EDIT_COLUMN_SUCCESS ) {
        return state.map( c => ( c.id !== payload.id ? c : payload ) );
    }
    if ( type === types.REMOVE_COLUMN_SUCCESS ) {
        return state.filter( c => c.id !== payload.id );
    }
    if ( type === types.CREATE_TASK_SUCCESS ) {
        return state.map( c => ( c.id !== payload.column ? c : {
            ...c,
            tasks: [ ...c.tasks, { ...payload, column: undefined } ],
        } ) );
    }
    if ( type === types.EDIT_TASK_SUCCESS ) {
        return state.map( c => ( c.id !== payload.column ? c : {
            ...c,
            tasks: [ ...c.tasks.map( t => ( t.id !== payload.id ? t : { ...payload, column: undefined } ) ) ],
        } ) );
    }
    if ( type === types.REMOVE_TASK_SUCCESS ) {
        return state.map( c => ( c.id !== payload.column ? c : {
            ...c,
            tasks: [ ...c.tasks.filter( t => t.id !== payload.id ) ],
        } ) );
    }
    return state;
};

const errors = ( state = defaultState.errors, { type, payload } ) => {
    if ( [
        types.EDIT_BOARD,
        types.CREATE_COLUMN,
        types.EDIT_COLUMN,
        types.CREATE_TASK,
        types.EDIT_TASK ].includes( type )
    ) {
        return {};
    }
    if ( [
        types.EDIT_BOARD_ERROR,
        types.CREATE_COLUMN_ERROR,
        types.EDIT_COLUMN_ERROR,
        types.CREATE_TASK_ERROR,
        types.EDIT_TASK_ERROR ].includes( type )
    ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    board,
    columns,
    errors,
} );
