import types from "./types";

const createError = payload => ( { type: types.ERROR, payload } );

const clearError = () => ( { type: types.CLEAR } );

export default {
    createError,
    clearError,
};
