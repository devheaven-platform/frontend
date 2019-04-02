import { put, takeLatest } from "redux-saga/effects";
import appTypes from "app/duck/types";
import errorTypes from "./types";

function* error( action ) {
    const { response } = action.payload;

    if ( response && response.status === 401 ) {
        yield put( { type: appTypes.LOGOUT } );
    }

    if ( response && response.status === 503 ) {
        yield put( { type: appTypes.VALIDATE_CONNECTION_ERROR } );
    }
}

export default function* main() {
    yield takeLatest( errorTypes.ERROR, error );
}
