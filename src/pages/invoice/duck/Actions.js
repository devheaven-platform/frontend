import types from "./Types";

const load = () => ( { type: types.LOAD } );

const create = payload => ( { type: types.CREATE, payload } );

export default {
    load,
    create,
};
