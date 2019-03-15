import { put, takeEvery } from "redux-saga/effects";
import { Axios } from "common/helpers";
import types from "./types";
import actions from "./actions";

function* authenticate( { payload } ) {
    yield put( { type: types.AUTHENTICATE_SUCCESS, payload: { isAuthenticated: !!payload } } );
    yield put( actions.setToken( payload ) );
}

function* init() {
    Axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

    yield setTimeout( () => {
        // TODO: call health check
    }, 3000 );
}

export default function* main() {
    yield takeEvery( types.AUTHENTICATE, authenticate );
    yield takeEvery( types.INIT, init );
}
