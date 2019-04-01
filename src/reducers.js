import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// Imported reducers
import { reducers as app } from "./app/duck";
import { reducers as project } from "./pages/project/duck";
import { reducers as board } from "./pages/board/duck";
import { reducers as error } from "./components/error/duck";

const reducers = {
    // Combined reducers
    app,
    form,
    project,
    board,
    error,
};

export default combineReducers( reducers );
