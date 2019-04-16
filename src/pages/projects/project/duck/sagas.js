import {
    takeLatest,
    call, put, takeEvery, select,
} from "redux-saga/effects";
import { Axios } from "common/helpers";
import { SubmissionError } from "redux-form";
import types from "./types";
import actions from "./actions";

function* getBoards( action ) {
    try {
        const boards = [];
        // TODO coupling with project service
        const boardIds = [ "6266213f-0f79-4120-a6e4-459d42f79fd6" ];
        for ( let i = 0; i < boardIds.length; i++ ) {
            const { data } = yield call( Axios.get, `/boards/${ boardIds[ i ] }` );
            boards.push( data );
        }
        yield put( { type: types.GET_BOARDS_SUCCESS, payload: { boards } } );
    } catch ( error ) {
        yield put( { type: types.GET_BOARDS_ERROR } );
    }
}

export const getState = state => state;

function* createBoard( action ) {
    try {
        const state = yield select( getState );
        const { id } = state.project;
        const { data } = yield call( Axios.post, "/boards/", {
            ...action.payload,
            id,
        } );
        yield put( { type: actions.createBoard.SUCCESS, payload: data } );
    } catch ( error ) {
        const formError = error.response && error.response.status === 400 ? new SubmissionError( {
            ...error.response.data.errors,
            _error: error.response.data.message,
        } ) : new SubmissionError( {} );

        yield put( actions.createBoard.failure( formError ) );
    }
}

function* deleteBoard( action ) {
    try {
        yield call( Axios.delete, `/boards/${ action.payload }` );
        yield put( { type: types.DELETE_BOARD_SUCCESS, payload: action.payload } );
    } catch ( error ) {
        yield put( { type: types.DELETE_BOARD_ERROR, payload: error } );
    }
}

function* archiveProject( action ) {
    try {
        yield call( Axios.patch, `/project/${ action.payload }` );
        yield put( { type: types.ARCHIVE_PROJECT_SUCCESS } );
    } catch ( error ) {
        yield put( { type: types.ARCHIVE_PROJECT_ERROR, payload: error } );
    }
}

function* archiveBoard( action ) {
    try {
        const { data } = yield call( Axios.patch, `/boards/${ action.payload.id }`, action.payload );
        yield put( { type: types.ARCHIVE_BOARD_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( { type: types.ARCHIVE_BOARD_ERROR, payload: error } );
    }
}

function* updateBoard( action ) {
    try {
        const { data } = yield call( Axios.patch, `/boards/${ action.payload.id }`, action.payload );
        yield put( { type: types.UPDATE_BOARD_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( { type: types.UPDATE_BOARD_ERROR, payload: error } );
    }
}

export default function* main() {
    yield takeEvery( types.GET_BOARDS, getBoards );
    yield takeEvery( actions.createBoard.REQUEST, createBoard );
    yield takeLatest( types.ARCHIVE_PROJECT, archiveProject );
    yield takeLatest( types.DELETE_BOARD, deleteBoard );
    yield takeLatest( types.ARCHIVE_BOARD, archiveBoard );
    yield takeLatest( types.UPDATE_BOARD, updateBoard );
}
