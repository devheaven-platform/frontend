import { combineReducers } from "redux";

import types from "./Types";
import Selectors from "./Selectors";

const defaultState = {
    personnel: null,
    errors: {},
};

const personnel = ( state = defaultState.personnel, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.map( person => ( {
            ...person,
            roles: Selectors.roles( person.roles ),
        } ) );
    }
    if ( type === types.CREATE_SUCCESS ) {
        return [ ...state, { ...payload, roles: Selectors.roles( payload.roles ) } ];
    }
    if ( type === types.REMOVE_SUCCESS ) {
        return state.filter( item => item !== payload );
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
    personnel,
    errors,
} );
