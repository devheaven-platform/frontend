import { combineReducers } from "redux";

import types from "./Types";
import Selectors from "./Selectors";

const defaultState = {
    person: null,
    errors: {},
};

const person = ( state = defaultState.person, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return { ...payload, roles: Selectors.roles( payload.roles ), emails: Selectors.emails( payload.emails ) };
    }
    if ( type === types.EDIT_SUCCESS ) {
        return { ...payload, roles: Selectors.roles( payload.roles ), emails: Selectors.emails( payload.emails ) };
    }
    return state;
};

const errors = ( state = defaultState.errors, { type, payload } ) => {
    if ( type === types.EDIT ) {
        return {};
    }
    if ( type === types.EDIT_ERROR ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    person,
    errors,
} );
