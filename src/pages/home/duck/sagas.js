import { put, takeEvery } from "redux-saga/effects";
import { SubmissionError } from "redux-form";
import actions from "./actions";

function* submit( action ) {
    // Get the data from the action
    console.log( action.payload );

    // Success
    // yield put( actions.submit.success() );

    // Error
    const formError = new SubmissionError( {
        name: "Name is invalid",
        email: "Email is invalid",
        password: "Password is invalid",
        message: "Message is invalid",
        type: "Type is invalid",
        gender: "Gender is invalid",
        terms: "Terms is invalid",
        _error: "General error",
    } );
    yield put( actions.submit.failure( formError ) );
}

export default function* main() {
    yield takeEvery( actions.submit.REQUEST, submit );
}
