import { call, put, takeLatest } from "redux-saga/effects";
import { Axios } from "common/helpers";
import { SubmissionError } from "redux-form";
import errorTypes from "components/error/duck/types";
import actions from "./actions";
import types from "./types";

function* getProjects( action ) {
    try {
        const { data } = yield call( Axios.get, `/projects/for/${ action.payload }` );
        yield put( { type: types.GET_ALL_PROJECTS_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( { type: errorTypes.ERROR, payload: error } );
    }
}

function* createProject( action ) {
    try {
        console.log( action.payload );
        const { data } = yield call( Axios.post, "/projects/", action.payload );
        yield put( { type: actions.createProject.SUCCESS, payload: data } );
    } catch ( error ) {
        const formError = error.response && error.response.status === 400 ? new SubmissionError( {
            ...error.response.data.errors,
            _error: error.response.data.message,
        } ) : new SubmissionError( {} );

        yield put( actions.createProject.failure( formError ) );
    }
}

function* archiveProject( action ) {
    try {
        yield call( Axios.patch, `/projects/${ action.payload }`, { archived: true } );
        yield put( { type: types.ARCHIVE_PROJECT_SUCCESS, payload: action.payload } );
    } catch ( error ) {
        yield put( { type: types.ARCHIVE_PROJECT_ERROR, payload: error } );
    }
}

export default function* main() {
    yield takeLatest( types.GET_ALL_PROJECTS, getProjects );
    yield takeLatest( actions.createProject.REQUEST, createProject );
    yield takeLatest( types.ARCHIVE_PROJECT, archiveProject );
}
