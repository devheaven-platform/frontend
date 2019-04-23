import {
    all,
    call,
    put,
    takeEvery,
} from "redux-saga/effects";
import { Axios } from "common/helpers";
import types from "./types";

function* init() {
    const env = process.env.REACT_APP_ENV_NAME;
    const health = process.env[ `REACT_APP_HEALTH_URL_${ env }` ];

    if ( env !== "development" ) {
        try {
            yield all( [
                call( Axios.get, `${ health }/task-management/health/` ),
                call( Axios.get, `${ health }/project-management/health/` ),
            ] );

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
