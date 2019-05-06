import { all } from "redux-saga/effects";

// Imported sagas
import { sagas as app } from "./app/duck";
import { sagas as board } from "./pages/board/duck";
import { sagas as projects } from "./pages/projects/duck";
import { sagas as project } from "./pages/projects/project/duck";
import { sagas as error } from "./components/error/duck";

const sagas = [
    // Combined sagas
    app(),
    board(),
    project(),
    projects(),
    error(),
];

export default function* root() { yield all( sagas ); }
