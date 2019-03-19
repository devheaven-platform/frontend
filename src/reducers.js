import { combineReducers } from "redux";

// Imported reducers
import { reducers as app } from "./app/duck";

const reducers = {
    // Combined reducers
    app,
};

export default combineReducers( reducers );
