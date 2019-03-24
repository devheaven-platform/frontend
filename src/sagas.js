import { all } from "redux-saga/effects";
import { formActionSaga as form } from "redux-form-saga";

// Imported sagas
import { sagas as app } from "./app/duck";
import { sagas as home } from "./pages/home/duck";

const sagas = [
    // Combined sagas
    app(),
    home(),
    form(),
];

export default function* root() { yield all( sagas ); }
