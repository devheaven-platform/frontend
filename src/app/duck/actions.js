import types from "./types";

const init = payload => ( { type: types.INIT, payload } );

const login = payload => ( { type: types.LOGIN, payload } );

const logout = () => ( { type: types.LOGOUT } );

export default {
    init,
    login,
    logout,
};
