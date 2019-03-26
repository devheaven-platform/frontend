import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// Imported reducers
import { reducers as app } from "./app/duck";
import { reducers as error } from "./components/error/duck";

const reducers = {
    // Combined reducers
    app,
    form,
    error,
};

export default combineReducers( reducers );
