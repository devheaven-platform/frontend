import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import errorSelectors from "components/error/duck/Selectors";
import errorTypes from "components/error/duck/Types";
import stub from "./__Stub__";
import types from "./Types";

function* init() {
    axios.defaults.baseURL = process.env[ `REACT_APP_API_URL_${ process.env.REACT_APP_ENV_NAME }` ];

    try {
        yield call( stub.get, "/api/health/" );
        yield put( { type: types.VALIDATE_CONNECTION_SUCCESS } );
    } catch ( error ) {
        yield put( { type: types.VALIDATE_CONNECTION_ERROR, error } );
    }
}

function* login( { payload } ) {
    try {
        const { data } = yield call( stub.post, "/api/login/", payload );
        yield put( { type: types.LOGIN_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.LOGIN_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

export default function* main() {
    yield takeEvery( types.INIT, init );
    yield takeEvery( types.LOGIN, login );
}
