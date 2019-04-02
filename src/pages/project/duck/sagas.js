import {
    call, put, takeEvery, select,
} from "redux-saga/effects";
import { Axios } from "common/helpers";
import { SubmissionError } from "redux-form";
import types from "./types";
import actions from "./actions";

function* getBoards( action ) {
    try {
        const { data } = yield call( Axios.get, `/board/getAll/${ action.payload }` );
        yield put( { type: types.GET_BOARDS_SUCCESS, payload: { boards: data.boards } } );
    } catch ( error ) {
        yield put( { type: types.GET_BOARDS_ERROR } );
    }
}

export const getState = state => state;

function* createBoard( action ) {
    try {
        const state = yield select( getState );
        const { projectId } = state.project;
        const { data } = yield call( Axios.post, "/board/create", {
            ...action.payload,
            projectId,
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
        yield call( Axios.delete, `/board/delete/${ action.payload }` );
        yield put( { type: types.DELETE_BOARD_SUCCESS, payload: action.payload } );
    } catch ( error ) {
        yield put( { type: types.DELETE_BOARD_ERROR } );
    }
}
export default function* main() {
    yield takeEvery( types.GET_BOARDS, getBoards );
    yield takeEvery( actions.createBoard.REQUEST, createBoard );
    yield takeEvery( types.DELETE_BOARD, deleteBoard );
}
