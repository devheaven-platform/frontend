import { call, put } from "redux-saga/effects";
import { Axios } from "common/helpers";
import takeLatest from "redux-saga";
import types from "./types";

function* getProjects( action ) {
    try {
        const { data } = yield call( Axios.get, `/project/${ action.payload }` );
        yield put( { type: types.GET_ALL_PROJECTS_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( { type: types.GET_ALL_PROJECTS_ERROR, error } );
    }
}

function* createProject( action ) {
    try {
        const { data } = yield call( Axios.post, "/project/", action.payload );
        yield put( { type: types.CREATE_PROJECT_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( { type: types.CREATE_PROJECT_ERROR, payload: error } );
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

export default function* main() {
    yield takeLatest( types.GET_PROJECTS, getProjects );
    yield takeLatest( types.CREATE_PROJECT, createProject );
}
