import { combineReducers } from "redux";

// Imported reducers
import { reducers as app } from "./app/duck";
import { reducers as board } from "./pages/board/duck";
import { reducers as projects } from "./pages/projects/duck";
import { reducers as project } from "./pages/projects/project/duck";
import { reducers as error } from "./components/error/duck";
import { reducers as hours } from "./pages/hours/duck";
import { reducers as invoices } from "./pages/invoice/duck";
import { reducers as personnel } from "./pages/personnel/duck";
import { reducers as person } from "./pages/personnel/person/duck";
import { reducers as clients } from "./pages/clients/duck";
import { reducers as client } from "./pages/clients/client/duck";

const reducers = {
    // Combined reducers
    app,
    board,
    project,
    invoices,
    projects,
    error,
    hours,
    personnel,
    person,
    clients,
    client,
};

export default combineReducers( reducers );
