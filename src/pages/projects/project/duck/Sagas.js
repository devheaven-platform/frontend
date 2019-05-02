import {
    all,
    call,
    put,
    select,
    takeLatest,
} from "redux-saga/effects";
import axios from "axios";

import errorSelectors from "components/error/duck/Selectors";
import errorTypes from "components/error/duck/Types";
import selectors from "./Selectors";
import stub from "./__Stub__";
import types from "./Types";

function* load( { payload } ) {
    try {
        const [ project, users ] = yield all( [
            call( axios.get, `/projects/${ payload }` ),
            call( stub.get, "/users/" ),
        ] );
        const members = yield all( project.data.members.map( userId => call( stub.get, `/users/${ userId }` ) ) );
        // TODO: uncomment this line when project/task management services are finished
        // const boards = yield all( project.data.boards.map( boardId => call( axios.get, `/boards/${ boardId }` ) ) );
        const { data: boards } = yield call( axios.get, "/boards/" );
        const { data: client } = yield call( stub.get, `/clients/${ project.data.client }` );
        const { data: owner } = yield call( stub.get, `/users/${ project.data.owner }` );

        yield put( {
            type: types.LOAD_SUCCESS,
            payload: {
                project: {
                    ...project.data,
                    // TODO: uncomment this line when project/task management services are finished
                    // boards: boards.map( res => res.data ),
                    boards,
                    members: members.map( res => res.data ),
                    client,
                    owner,
                },
                users: users.data,
            },
        } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* editProject( { payload } ) {
    try {
        const id = yield select( selectors.projectId );
        const { data: project } = yield call( axios.patch, `/projects/${ id }`, payload );
        const { data: client } = yield call( stub.get, `/clients/${ project.client }` );
        const { data: owner } = yield call( stub.get, `/users/${ project.owner }` );

        yield put( { type: types.EDIT_PROJECT_SUCCESS, payload: { ...project, client, owner } } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.EDIT_PROJECT_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* archiveProject() {
    try {
        const id = yield select( selectors.projectId );
        const { data: project } = yield call( axios.patch, `/projects/${ id }`, { archived: true } );
        const { data: client } = yield call( stub.get, `/clients/${ project.client }` );
        const { data: owner } = yield call( stub.get, `/users/${ project.owner }` );

        yield put( { type: types.ARCHIVE_PROJECT_SUCCESS, payload: { ...project, client, owner } } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* addMember( { payload } ) {
    try {
        const id = yield select( selectors.projectId );
        yield call( axios.patch, `/projects/${ id }/members/${ payload.user }` );
        const { data: member } = yield call( stub.get, `/users/${ payload.user }` );

        yield put( { type: types.ADD_MEMBER_SUCCESS, payload: member } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.ADD_MEMBER_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* removeMember( { payload } ) {
    try {
        const id = yield select( selectors.projectId );
        yield call( axios.delete, `/projects/${ id }/members/${ payload.id }` );

        yield put( { type: types.REMOVE_MEMBER_SUCCESS, payload: payload.id } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* createMilestone( { payload } ) {
    try {
        const id = yield select( selectors.projectId );
        const { data } = yield call( axios.post, "/milestones/", { ...payload, project: id } );

        yield put( { type: types.CREATE_MILESTONE_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.CREATE_MILESTONE_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* removeMilestone( { payload } ) {
    try {
        yield call( axios.delete, `/milestones/${ payload.id }` );

        yield put( { type: types.REMOVE_MILESTONE_SUCCESS, payload: payload.id } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* createBoard( { payload } ) {
    try {
        const id = yield select( selectors.projectId );
        const { data } = yield call( axios.post, "/boards/", { ...payload, project: id } );

        yield put( { type: types.CREATE_BOARD_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorSelectors.errorType( error, types.CREATE_BOARD_ERROR, errorTypes.APP_ERROR ),
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

export default function* main() {
    yield takeLatest( types.LOAD, load );
    yield takeLatest( types.EDIT_PROJECT, editProject );
    yield takeLatest( types.ARCHIVE_PROJECT, archiveProject );
    yield takeLatest( types.ADD_MEMBER, addMember );
    yield takeLatest( types.REMOVE_MEMBER, removeMember );
    yield takeLatest( types.CREATE_MILESTONE, createMilestone );
    yield takeLatest( types.REMOVE_MILESTONE, removeMilestone );
    yield takeLatest( types.CREATE_BOARD, createBoard );
}
