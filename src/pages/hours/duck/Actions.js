import types from "./Types";

const load = payload => ( { type: types.LOAD, payload } );

const create = payload => ( { type: types.CREATE, payload } );
const deleteWorkPeriod = payload => ( { type: types.DELETE, payload } );

export default {
    load,
    create,
    deleteWorkPeriod,
};
