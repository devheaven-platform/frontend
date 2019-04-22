import {
    all,
    call,
    put,
    takeEvery,
} from "redux-saga/effects";
import { Axios } from "common/helpers";
import types from "./types";

function* init() {
    // Config axios
    if ( process.env.NODE_ENV === "development" ) {
        const { REACT_APP_HEALTH_ENDPOINT, REACT_APP_API_ENDPOINT } = process.env;

        // Do health check
        try {
            yield all( [
                call( Axios.get, `${ REACT_APP_HEALTH_ENDPOINT }/task-management/health/` ),
                call( Axios.get, `${ REACT_APP_HEALTH_ENDPOINT }/project-management/health/` ),
            ] );

            // Set default endpoint
            Axios.defaults.baseURL = REACT_APP_API_ENDPOINT;

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
