import {
    call,
    put,
    takeLatest,
    select,
} from "redux-saga/effects";
import axios from "axios";

import errorSelectors from "components/error/duck/Selectors";
import errorTypes from "components/error/duck/Types";
import types from "./Types";
import selectors from "./Selectors";

function* load( { payload } ) {
    try {
        const { data } = yield call( axios.get, `/personnel/${ payload }` );
        yield put( { type: types.LOAD_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* edit( { payload } ) {
    const id = yield select( selectors.employeeId );
    try {
        const { data } = yield call( axios.patch, `/personnel/${ id }`, payload );
        yield put( { type: types.EDIT_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.EDIT_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

export default function* main() {
    yield takeLatest( types.LOAD, load );
    yield takeLatest( types.EDIT, edit );
}
