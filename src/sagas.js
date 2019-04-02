import { all } from "redux-saga/effects";
import { formActionSaga as form } from "redux-form-saga";

// Imported sagas
import { sagas as app } from "./app/duck";
import { sagas as project } from "./pages/project/duck";

const sagas = [
    // Combined sagas
    app(),
    form(),
    project(),
];

export default function* root() { yield all( sagas ); }
