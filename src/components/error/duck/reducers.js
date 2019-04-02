import { combineReducers } from "redux";
import types from "./types";

const defaultState = [];

const errors = ( state = defaultState, { type, payload } ) => {
    if ( type === types.ERROR ) {
        const { response } = payload;
        const message = response && response.data.message ? response.data.message : payload.message;
        return [ ...state, message ];
    }
    if ( type === types.CLEAR ) {
        return [];
    }
    return state;
};

export default combineReducers( {
    errors,
} );
