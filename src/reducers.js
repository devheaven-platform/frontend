import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// Imported reducers
import { reducers as app } from "./app/duck";
import { reducers as project } from "./pages/project/duck";

const reducers = {
    // Combined reducers
    app,
    form,
    project,
};

export default combineReducers( reducers );
