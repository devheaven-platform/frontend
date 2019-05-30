import types from "./Types";

const init = payload => ( { type: types.INIT, payload } );

const login = payload => ( { type: types.LOGIN, payload } );

const loginGoogle = payload => ( { type: types.LOGIN_GOOGLE, payload } );

const logout = () => ( { type: types.LOGOUT } );

export default {
    init,
    login,
    loginGoogle,
    logout,
};
