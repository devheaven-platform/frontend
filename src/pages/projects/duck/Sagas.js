import {
    all,
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
        const [ projects, clients ] = yield all( [
            call( axios.get, "/projects/" ),
            call( axios.get, "/clients/" ),
        ] );
        yield put( { type: types.LOAD_SUCCESS, payload: { projects: projects.data, clients: clients.data } } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* create( { payload } ) {
    try {
        const { data } = yield call( axios.post, "/projects/", payload );
        yield put( { type: types.CREATE_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.CREATE_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* archive( { payload } ) {
    try {
        const { data } = yield call( axios.patch, `/projects/${ payload.id }`, { archived: true } );
        yield put( { type: types.ARCHIVE_SUCCESS, payload: data } );
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
    yield takeLatest( types.ARCHIVE, archive );
}
