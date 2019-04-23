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

function* createColumn( action ) {
    try {
        const { data } = yield call( Axios.post, "/columns/", action.payload );
        yield put( { type: types.CREATE_COLUMN_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( { type: types.CREATE_COLUMN_ERROR } );
    }
}

function* deleteColumn( action ) {
    try {
        const { data } = yield call( Axios.delete, `/columns/${ action.payload }` );
        yield put( { type: types.DELETE_COLUMN_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( { type: types.DELETE_COLUMN_ERROR } );
    }
}

function* createTask( action ) {
    try {
        const { data } = yield call( Axios.post, "/tasks/", action.payload );
        yield put( { type: types.CREATE_TASK_SUCCESS, payload: { ...data, columnId: action.payload.column } } );
    } catch ( error ) {
        yield put( { type: types.CREATE_TASK_ERROR } );
    }
}

function* deleteTask( action ) {
    try {
        const { data } = yield call( Axios.delete, `/tasks/${ action.payload }` );
        yield put( { type: types.DELETE_TASK_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( { type: types.DELETE_TASK_ERROR } );
    }
}

export default function* main() {
    yield takeEvery( types.GET_BOARD, getBoard );
    yield takeEvery( types.CREATE_COLUMN, createColumn );
    yield takeEvery( types.CREATE_TASK, createTask );
    yield takeEvery( types.DELETE_COLUMN, deleteColumn );
    yield takeEvery( types.DELETE_TASK, deleteTask );
}
