import {
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import axios from "axios";

import errorSelectors from "components/error/duck/Selectors";
import errorTypes from "components/error/duck/Types";
import types from "./Types";

function* load() {
    try {
        const { data } = yield call( axios.get, "/personnel/" );
        yield put( { type: types.LOAD_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* create( { payload } ) {
    try {
        payload.emails = [ "email@mail.com" ];
        const { data } = yield call( axios.post, "/personnel/", payload );
        yield put( { type: types.CREATE_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* remove( { payload } ) {
    try {
        yield call( axios.delete, `/personnel/${ payload.id }` );
        yield put( { type: types.REMOVE_SUCCESS, payload } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

export default function* main() {
    yield takeLatest( types.LOAD, load );
    yield takeLatest( types.CREATE, create );
    yield takeLatest( types.REMOVE, remove );
}
