import types from "./types";

const getBoardColumns = payload => ( { type: types.GET_COLUMNS, payload } );
const getColumnTasks = payload => ( { type: types.GET_TASKS, payload } );

export default {
    getBoardColumns, getColumnTasks,
};
