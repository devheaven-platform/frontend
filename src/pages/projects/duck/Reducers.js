import { combineReducers } from "redux";

import selectors from "./Selectors";
import types from "./Types";

const defaultState = {
    projects: null,
    clients: null,
    errors: {},
};

const projects = ( state = defaultState.projects, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.projects;
    }
    if ( type === types.CREATE_SUCCESS ) {
        return [ payload, ...state ];
    }
    if ( type === types.ARCHIVE_SUCCESS ) {
        return state.map( p => ( p.id === payload.id ? payload : p ) );
    }
    return state;
};

const clients = ( state = defaultState.clients, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return selectors.clients( payload.clients );
    }
    return state;
};

const errors = ( state = defaultState.errors, { type, payload } ) => {
    if ( type === types.CREATE_ERROR ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    projects,
    clients,
    errors,
} );
