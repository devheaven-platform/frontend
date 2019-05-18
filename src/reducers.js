import { combineReducers } from "redux";

// Imported reducers
import { reducers as app } from "./app/duck";
import { reducers as board } from "./pages/board/duck";
import { reducers as projects } from "./pages/projects/duck";
import { reducers as project } from "./pages/projects/project/duck";
import { reducers as error } from "./components/error/duck";
import { reducers as hours } from "./pages/hours/duck";

const reducers = {
    // Combined reducers
    app,
    board,
    project,
    projects,
    error,
    hours,
};

export default combineReducers( reducers );
