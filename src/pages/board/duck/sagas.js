import {
    call, put, takeEvery,
} from "redux-saga/effects";
import { Axios } from "common/helpers";
import types from "./types";

function* getBoard( action ) {
    try {
        const { data } = yield call( Axios.get, `/boards/${ action.payload }` );
        yield put( { type: types.GET_BOARD_SUCCESS, payload: { board: data } } );
    } catch ( error ) {
        yield put( { type: types.GET_BOARD_ERROR } );
    }
}

export default function* main() {
    yield takeEvery( types.GET_BOARD, getBoard );
}
