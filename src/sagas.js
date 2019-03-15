import { all } from "redux-saga/effects";

// Imported sagas
import { sagas as app } from "./app/duck";

const sagas = [
    // Combined sagas
    app(),
];

export default function* root() { yield all( sagas ); }
