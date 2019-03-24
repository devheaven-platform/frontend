import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// Imported reducers
import { reducers as app } from "./app/duck";
import { reducers as home } from "./pages/home/duck";

const reducers = {
    // Combined reducers
    app,
    home,
    form,
};

export default combineReducers( reducers );
