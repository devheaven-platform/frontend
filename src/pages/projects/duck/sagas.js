import { call, put, takeLatest } from "redux-saga/effects";
import { Axios } from "common/helpers";
import { SubmissionError } from "redux-form";
import errorTypes from "components/error/duck/types";
import actions from "./actions";
import types from "./types";

function* getProjects( action ) {
    try {
        const { data } = yield call( Axios.get, `/project/${ action.payload }` );
        yield put( { type: types.GET_ALL_PROJECTS_SUCCESS, payload: data } );
        // const { projects } = {
        //     projects: [ { id: "3b8fc595-afb7-47a2-83ff-662746c66dee", name: "test", description: "mooi project" }, { id: "3b8fc595-afb7-47a2-83ff-662746c66eee", name: "project2", description: "mooi project2" } ],
        // };
        // yield put( { type: types.GET_ALL_PROJECTS_SUCCESS, payload: projects } );
    } catch ( error ) {
        yield put( { type: errorTypes.ERROR, payload: error } );
    }
}

function* createProject( action ) {
    try {
        console.log( action.payload );
        const { data } = yield call( Axios.post, "/project/", action.payload );
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
        yield call( Axios.patch, `/project/${ action.payload }` );
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
