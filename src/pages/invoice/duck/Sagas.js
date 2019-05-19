import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import axios from "axios";

import errorSelectors from "components/error/duck/Selectors";
import errorTypes from "components/error/duck/Types";
import types from "./Types";

function* load() {
    try {
        const [ projects, invoices ] = yield all( [
            call( axios.get, "/projects/" ),
            call( axios.get, "/invoices/" ),
        ] );
        const invoiceProjects = yield all( invoices.data.map( invoice => call( axios.get, `/projects/${ invoice.project }` ) ) );
        const newinvoices = invoices.data.map( ( invoice, index ) => ( { ...invoice, project: invoiceProjects[ index ].data.name } ) );
        yield put( { type: types.LOAD_SUCCESS, payload: { projects: projects.data, invoices: newinvoices } } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

function* create( { payload } ) {
    try {
        const { data } = yield call( axios.post, "/invoices/", payload );

        const project = yield call( axios.get, `/projects/${ data.project }` );
        data.project = project.name;
        console.log( data );
        yield put( { type: types.CREATE_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: errorTypes.APP_ERROR,
            payload: errorSelectors.errorPayload( error ),
        } );
    }
}

export default function* main() {
    yield takeLatest( types.LOAD, load );
    yield takeLatest( types.CREATE, create );
}
