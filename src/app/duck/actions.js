import types from "./types";

const authenticate = payload => ( { type: types.AUTHENTICATE, payload } );

const init = payload => ( { type: types.INIT, payload } );

const setToken = payload => ( { type: types.SET_TOKEN, payload } );

export default {
    setToken,
    authenticate,
    init,
};
