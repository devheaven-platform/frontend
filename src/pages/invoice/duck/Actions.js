import types from "./Types";

const load = () => ( { type: types.LOAD } );

const create = payload => ( { type: types.CREATE, payload } );

const archive = payload => ( { type: types.ARCHIVE, payload } );
export default {
    load,
    create,
    archive,
};
