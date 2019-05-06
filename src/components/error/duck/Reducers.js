import { combineReducers } from "redux";
import types from "./Types";

const defaultState = [];

const errors = ( state = defaultState, { type, payload } ) => {
    if ( type === types.APP_ERROR ) {
        return [ ...state, payload ];
    }
    if ( type === types.CLEAR ) {
        return [];
    }
    return state;
};

export default combineReducers( {
    errors,
} );
