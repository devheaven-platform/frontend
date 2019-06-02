import types from "./Types";

const load = args => ( { type: types.LOAD, payload: args } );

const edit = payload => ( { type: types.EDIT, payload } );

export default {
    load,
    edit,
};
