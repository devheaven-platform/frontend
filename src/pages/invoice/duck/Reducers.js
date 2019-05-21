import { combineReducers } from "redux";

import selectors from "./Selectors";
import types from "./Types";

const defaultState = {
    invoices: null,
    projects: null,
    milestones: null,
    errors: {},
};

const invoices = ( state = defaultState.invoices, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.invoices;
    }
    if ( type === types.CREATE_SUCCESS ) {
        return [ payload, ...state ];
    }
    if ( type === types.ARCHIVE_SUCCESS ) {
        return state.map( p => ( p.id === payload.id ? payload : p ) );
    }
    return state;
};

const projects = ( state = defaultState.projects, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.projects.map( project => ( { ...project, milestones: selectors.milestones( project.milestones ) } ) );
    }
    return state;
};

const errors = ( state = defaultState.errors, { type, payload } ) => {
    if ( type === types.CREATE ) {
        return {};
    }
    if ( type === types.CREATE_ERROR ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    invoices,
    projects,
    errors,
} );
