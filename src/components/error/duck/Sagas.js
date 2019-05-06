import { call, takeEvery } from "redux-saga/effects";

import stub from "./__Stub__";
import types from "./Types";

function* log( { payload } ) {
    try {
        yield call( stub.post, "/api/errors/", payload );
    } catch ( error ) {
        yield;
    }
}

export default function* main() {
    yield takeEvery( types.APP_ERROR, log );
}
