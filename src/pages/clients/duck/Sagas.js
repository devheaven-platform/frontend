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
        const { data } = yield call( axios.get, "/clients/" );
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
        const contact = {
            firstname: payload.contactFirstname,
            lastname: payload.contactLastname,
            email: payload.contactEmail,
            phoneNumber: payload.contactPhonenumber,
        };

        payload = { ...payload, contact };
        const { data } = yield call( axios.post, "/clients/", payload );
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
        yield call( axios.delete, `/clients/${ payload.id }` );
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
