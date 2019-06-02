import {
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import axios from "axios";

import errorSelectors from "components/error/duck/Selectors";
import errorTypes from "components/error/duck/Types";
import types from "./Types";

function* load( { payload } ) {
    try {
        const { data } = yield call( axios.get, `/personnel/${ payload }` );
        console.log( data );
        yield put( { type: types.LOAD_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

export default function* main() {
    yield takeLatest( types.LOAD, load );
}
