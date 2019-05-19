import { combineReducers } from "redux";

// Imported reducers
import { reducers as app } from "./app/duck";
import { reducers as board } from "./pages/board/duck";
import { reducers as projects } from "./pages/projects/duck";
import { reducers as project } from "./pages/projects/project/duck";
import { reducers as error } from "./components/error/duck";
import { reducers as invoices } from "./pages/invoice/duck";

const reducers = {
    // Combined reducers
    app,
    board,
    project,
    invoices,
    projects,
    error,
};

export default combineReducers( reducers );
