import {
    call, put, takeEvery,
} from "redux-saga/effects";
import { Axios } from "common/helpers";
import types from "./types";

function* getBoardColumns( action ) {
    try {
        const { data } = yield call( Axios.get, `/column/getColumns/${ action.payload }` );
        yield put( { type: types.GET_COLUMNS_SUCCESS, payload: { columns: data.columns } } );
    } catch ( error ) {
        yield put( { type: types.GET_COLUMNS_ERROR } );
    }
}

function* getColumnTasks( action ) {
    try {
        const { data } = yield call( Axios.get, `/task/getTasks/${ action.payload }` );
        yield put( { type: types.GET_TASKS_SUCCESS, payload: { columns: data.tasks } } );
    } catch ( error ) {
        yield put( { type: types.GET_TASKS_ERROR } );
    }
}
export default function* main() {
    yield takeEvery( types.GET_COLUMNS, getBoardColumns );
    yield takeEvery( types.GET_TASKS, getColumnTasks );
}
