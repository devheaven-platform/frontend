import { all } from "redux-saga/effects";

// Imported sagas
import { sagas as app } from "./app/duck";
import { sagas as error } from "./components/error/duck";

const sagas = [
    // Combined sagas
    app(),
    error(),
];

export default function* root() { yield all( sagas ); }
