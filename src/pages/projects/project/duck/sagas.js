import {
    takeLatest,
    call,
    all,
    put,
    takeEvery,
    select,
} from "redux-saga/effects";
import { Axios } from "common/helpers";
import { SubmissionError } from "redux-form";
import actions from "./actions";
import stub from "./__stub__";
import types from "./types";

function* getBoards() {
    try {
        const boards = [];
        // TODO coupling with project service
        const boardIds = [ ];// fill in hardcoded id
        for ( let i = 0; i < boardIds.length; i += 1 ) {
            const { data } = yield call( Axios.get, `/boards/${ boardIds[ i ] }` );
            boards.push( data );
        }
        yield put( { type: types.GET_BOARDS_SUCCESS, payload: { boards } } );
    } catch ( error ) {
        yield put( { type: types.GET_BOARDS_ERROR } );
    }
}

function* getProject( action ) {
    try {
        const { data } = yield call( Axios.get, `/projects/${ action.payload }` );
        const members = yield all( data.members.map( id => call( stub.get, `/users/${ id }` ) ) );
        const { data: client } = yield call( stub.get, `/clients/${ data.client }` );
        const { data: owner } = yield call( stub.get, `/users/${ data.owner }` );

        yield put( {
            type: types.GET_PROJECT_SUCCESS,
            payload: {
                ...data,
                members: members.map( response => response.data ),
                client,
                owner,
            },
        } );
    } catch ( error ) {
        yield put( { type: types.GET_PROJECT_ERROR, payload: { error } } );
    }
}

export const getState = state => state;

function* createBoard( action ) {
    try {
        const state = yield select( getState );
        const { projectId } = state.project;
        const { data } = yield call( Axios.post, "/boards/", {
            ...action.payload,
            project: projectId,
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
        yield call( Axios.delete, `/boards/${ action.payload.id }` );
        yield put( { type: types.DELETE_BOARD_SUCCESS, payload: action.payload } );
    } catch ( error ) {
        yield put( { type: types.DELETE_BOARD_ERROR, payload: error } );
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

function* removeMember( action ) {
    try {
        const { data } = yield call( Axios.delete, `/projects/${ action.payload.projectid }/members/${ action.payload.memberid }`, action.payload );
        const members = yield all( data.members.map( id => call( stub.get, `/users/${ id }` ) ) );
        const { data: client } = yield call( stub.get, `/clients/${ data.client }` );
        const { data: owner } = yield call( stub.get, `/users/${ data.owner }` );
        yield put( {
            type: types.REMOVE_MEMBER_SUCCESS,
            payload: {
                ...data,
                members: members.map( response => response.data ),
                client,
                owner,
            },
        } );
    } catch ( error ) {
        yield put( { type: types.REMOVE_MEMBER_ERROR, payload: error } );
    }
}

function* addMember( action ) {
    try {
        const { data } = yield call( Axios.patch, `/projects/${ action.payload.projectid }/members/${ action.payload.memberid }`, action.payload );
        const members = yield all( data.members.map( id => call( stub.get, `/users/${ id }` ) ) );
        const { data: client } = yield call( stub.get, `/clients/${ data.client }` );
        const { data: owner } = yield call( stub.get, `/users/${ data.owner }` );
        yield put( {
            type: types.ADD_MEMBER_SUCCESS,
            payload: {
                ...data,
                members: members.map( response => response.data ),
                client,
                owner,
            },
        } );
    } catch ( error ) {
        yield put( { type: types.ADD_MEMBER_ERROR, payload: error } );
    }
}

function* getAllMembers() {
    try {
        const { data } = yield call( stub.get, "/members/" );
        yield put( { type: types.GET_ALL_MEMBERS_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( { type: types.REMOVE_MEMBER_ERROR, payload: error } );
    }
}

function* editProject( action ) {
    try {
        const state = yield select( getState );
        const { projectId } = state.project;
        const { data } = yield call( Axios.patch, `/projects/${ projectId }`, action.payload );
        const members = yield all( data.members.map( id => call( stub.get, `/users/${ id }` ) ) );
        const { data: client } = yield call( stub.get, `/clients/${ data.client }` );
        const { data: owner } = yield call( stub.get, `/users/${ data.owner }` );
        yield put( {
            type: types.EDIT_PROJECT_SUCCESS,
            payload: {
                ...data,
                members: members.map( response => response.data ),
                client,
                owner,
            },
        } );
    } catch ( error ) {
        yield put( { type: types.EDIT_PROJECT_ERROR, payload: error } );
    }
}

function* removeMilestone( action ) {
    try {
        const state = yield select( getState );
        const { projectId } = state.project;
        yield call( Axios.delete, `/milestones/${ action.payload }` );
        const { data } = yield call( Axios.get, `/projects/${ projectId }` );
        const members = yield all( data.members.map( id => call( stub.get, `/users/${ id }` ) ) );
        const { data: client } = yield call( stub.get, `/clients/${ data.client }` );
        const { data: owner } = yield call( stub.get, `/users/${ data.owner }` );

        yield put( {
            type: types.REMOVE_MILESTONE_SUCCESS,
            payload: {
                ...data,
                members: members.map( response => response.data ),
                client,
                owner,
            },
        } );
    } catch ( error ) {
        yield put( { type: types.REMOVE_MILESTONE_ERROR, payload: error } );
    }
}

function* addMilestone( action ) {
    try {
        const state = yield select( getState );
        const { projectId } = state.project;
        const { data } = yield call( Axios.post, "/milestones/", {
            name: action.payload.name, description: action.payload.description, date: action.payload.date, project: projectId,
        } );
        yield put( { type: types.ADD_MILESTONE_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( { type: types.ADD_MILESTONE_ERROR, payload: error } );
    }
}

export default function* main() {
    yield takeLatest( types.GET_PROJECT, getProject );
    yield takeEvery( types.GET_BOARDS, getBoards );
    yield takeEvery( actions.createBoard.REQUEST, createBoard );
    yield takeLatest( types.ARCHIVE_PROJECT, archiveProject );
    yield takeLatest( types.DELETE_BOARD, deleteBoard );
    yield takeLatest( types.ARCHIVE_BOARD, archiveBoard );
    yield takeLatest( types.UPDATE_BOARD, updateBoard );
    yield takeLatest( types.REMOVE_MEMBER, removeMember );
    yield takeLatest( types.GET_ALL_MEMBERS, getAllMembers );
    yield takeLatest( types.ADD_MEMBER, addMember );
    yield takeLatest( types.REMOVE_MILESTONE, removeMilestone );
    yield takeLatest( actions.addMilestone.REQUEST, addMilestone );
    yield takeEvery( actions.editProject.REQUEST, editProject );
}
