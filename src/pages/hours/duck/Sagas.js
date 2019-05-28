import {
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import axios from "axios";

import errorSelectors from "components/error/duck/Selectors";
import errorTypes from "components/error/duck/Types";
import types from "./Types";

function* load( { payload } ) {
    try {
        const query = `employee=${ payload }`;
        const { data } = yield call( axios.get, `/hours/?${ query }` );
        yield put( { type: types.LOAD_SUCCESS, payload: { hours: data } } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* create( { payload } ) {
    try {
        const { data } = yield call( axios.post, "/hours/", payload );
        yield put( { type: types.CREATE_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.CREATE_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* remove( { payload } ) {
    try {
        yield call( axios.delete, `/hours/${ payload.id }` );
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
