import { call, put, takeEvery } from "redux-saga/effects";
import { Axios } from "common/helpers";
import types from "./types";

function* init() {
    // Config axios
    if ( process.env.NODE_ENV !== "development" ) {
        Axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

        // Do health check
        try {
            yield call( Axios.get, "/api/v1/health/" );
            yield put( { type: types.VALIDATE_CONNECTION_SUCCESS } );
        } catch ( error ) {
            yield put( { type: types.VALIDATE_CONNECTION_ERROR, error } );
        }
    } else {
        yield put( { type: types.VALIDATE_CONNECTION_SUCCESS } );
    }
}

export default function* main() {
    yield takeEvery( types.INIT, init );
}
