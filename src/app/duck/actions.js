import types from "./types";

const init = payload => ( { type: types.INIT, payload } );

const login = payload => ( { type: types.LOGIN, payload } );

const logout = () => ( { type: types.LOGOUT } );

const toggleSidebar = () => ( { type: types.TOGGLE_SIDEBAR } );

export default {
    init,
    login,
    logout,
    toggleSidebar,
};
