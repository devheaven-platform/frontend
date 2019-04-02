import types from "./types";

const getBoard = payload => ( { type: types.GET_BOARD, payload } );

export default {
    getBoard,
};
