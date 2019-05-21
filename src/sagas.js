import { all } from "redux-saga/effects";

// Imported sagas
import { sagas as app } from "./app/duck";
import { sagas as board } from "./pages/board/duck";
import { sagas as invoices } from "./pages/invoice/duck";
import { sagas as projects } from "./pages/projects/duck";
import { sagas as project } from "./pages/projects/project/duck";
import { sagas as error } from "./components/error/duck";
import { sagas as hours } from "./pages/hours/duck";

const sagas = [
    // Combined sagas
    app(),
    board(),
    invoices(),
    project(),
    projects(),
    error(),
    hours(),
];

export default function* root() { yield all( sagas ); }
