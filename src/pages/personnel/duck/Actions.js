import types from "./Types";

const load = () => ( { type: types.LOAD } );

const create = payload => ( { type: types.CREATE, payload } );

const remove = payload => ( { type: types.REMOVE, payload } );

export default {
    load,
    create,
    remove,
};
