import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// Imported reducers
import { reducers as app } from "./app/duck";
import { reducers as project } from "./pages/projects/project/duck";
import { reducers as projects } from "./pages/projects/duck";
import { reducers as error } from "./components/error/duck";

const reducers = {
    // Combined reducers
    app,
    form,
    project,
    projects,
    error,
};

export default combineReducers( reducers );
