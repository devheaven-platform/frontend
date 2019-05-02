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
        const members = yield all( project.data.members.map( id => call( stub.get, `/users/${ id }` ) ) );
        // const boards = yield all( project.data.boards.map( id => call( axios.get, `/boards/${ id }` ) ) ); // TODO: uncomment this line when project/task management services are finished
        const { data: boards } = yield call( axios.get, "/boards/" );
        const { data: client } = yield call( stub.get, `/clients/${ project.data.client }` );
        const { data: owner } = yield call( stub.get, `/users/${ project.data.owner }` );

        yield put( {
            type: types.LOAD_SUCCESS,
            payload: {
                project: {
                    ...project.data,
                    // boards: boards.map( res => res.data ), // TODO: uncomment this line when project/task management services are finished
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

export default function* main() {
    yield takeLatest( types.LOAD, load );
    yield takeLatest( types.EDIT_PROJECT, editProject );
    yield takeLatest( types.ARCHIVE_PROJECT, archiveProject );
}
