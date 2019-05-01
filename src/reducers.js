import { combineReducers } from "redux";

// Imported reducers
import { reducers as app } from "./app/duck";
import { reducers as error } from "./components/error/duck";

const reducers = {
    // Combined reducers
    app,
    error,
};

export default combineReducers( reducers );
