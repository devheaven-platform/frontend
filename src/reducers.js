import { combineReducers } from "redux";

// Imported reducers
import { reducers as app } from "./app/duck";
import { reducers as projects } from "./pages/projects/duck";
import { reducers as error } from "./components/error/duck";

const reducers = {
    // Combined reducers
    app,
    projects,
    error,
};

export default combineReducers( reducers );
