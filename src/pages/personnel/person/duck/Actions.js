import types from "./Types";

const load = args => ( { type: types.LOAD, payload: args } );

export default {
    load,
};
