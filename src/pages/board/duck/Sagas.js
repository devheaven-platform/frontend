import {
    call,
    put,
    select,
    takeLatest,
} from "redux-saga/effects";
import axios from "axios";

import errorSelectors from "components/error/duck/Selectors";
import errorTypes from "components/error/duck/Types";
import selectors from "./Selectors";
import types from "./Types";

function* load( { payload } ) {
    try {
        const { data } = yield call( axios.get, `/boards/${ payload }` );
        yield put( { type: types.LOAD_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* editBoard( { payload } ) {
    try {
        const { data } = yield call( axios.patch, `/boards/${ payload.id }`, payload );
        yield put( { type: types.EDIT_BOARD_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.EDIT_BOARD_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* createColumn( { payload } ) {
    try {
        const id = yield select( selectors.boardId );
        const { data } = yield call( axios.post, "/columns/", { ...payload, board: id } );
        yield put( { type: types.CREATE_COLUMN_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.CREATE_COLUMN_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* editColumn( { payload } ) {
    try {
        const { data } = yield call( axios.patch, `/columns/${ payload.id }`, payload );
        yield put( { type: types.EDIT_COLUMN_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.EDIT_COLUMN_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* removeColumn( { payload } ) {
    try {
        yield call( axios.delete, `/columns/${ payload }` );
        yield put( { type: types.REMOVE_COLUMN_SUCCESS, payload } );
    } catch ( error ) {
        yield put( { type: errorTypes.APP_ERROR, payload: errorSelectors.errorPayload( error ) } );
    }
}

function* createTask( { payload } ) {
    try {
        const { data } = yield call( axios.post, "/tasks/", payload );
        yield put( { type: types.CREATE_TASK_SUCCESS, payload: { ...data, columnId: payload.column } } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.CREATE_TASK_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* editTask( { payload } ) {
    try {
        const { data } = yield call( axios.patch, `/tasks/${ payload.id }`, payload.values );
        yield put( { type: types.EDIT_TASK_SUCCESS, payload: { ...data, columnId: payload.columnId } } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.EDIT_TASK_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* removeTask( { payload } ) {
    try {
        yield call( axios.delete, `/tasks/${ payload.id }` );
        yield put( { type: types.REMOVE_TASK_SUCCESS, payload } );
    } catch ( error ) {
        yield put( { type: errorTypes.APP_ERROR, payload: errorSelectors.errorPayload( error ) } );
    }
}

export default function* main() {
    yield takeLatest( types.LOAD, load );
    yield takeLatest( types.EDIT_BOARD, editBoard );
    yield takeLatest( types.CREATE_COLUMN, createColumn );
    yield takeLatest( types.EDIT_COLUMN, editColumn );
    yield takeLatest( types.REMOVE_COLUMN, removeColumn );
    yield takeLatest( types.CREATE_TASK, createTask );
    yield takeLatest( types.EDIT_TASK, editTask );
    yield takeLatest( types.REMOVE_TASK, removeTask );
}
