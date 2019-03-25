import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// Imported reducers
import { reducers as app } from "./app/duck";

const reducers = {
    // Combined reducers
    app,
    form,
};

export default combineReducers( reducers );
