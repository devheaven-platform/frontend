import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import axios from "axios";

import errorSelectors from "components/error/duck/Selectors";
import errorTypes from "components/error/duck/Types";
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

export default function* main() {
    yield takeLatest( types.LOAD, load );
}
