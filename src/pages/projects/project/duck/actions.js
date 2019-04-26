import { createFormAction } from "redux-form-saga";
import types from "./types";

const createBoard = createFormAction( types.CREATE_BOARD );
const getProject = payload => ( { type: types.GET_PROJECT, payload } );
const getBoards = payload => ( { type: types.GET_BOARDS, payload } );
const archiveProject = payload => ( { type: types.ARCHIVE_PROJECT, payload } );
const deleteBoard = payload => ( { type: types.DELETE_BOARD, payload } );
const archiveBoard = payload => ( { type: types.ARCHIVE_BOARD, payload } );
const updateBoard = payload => ( { type: types.UPDATE_BOARD, payload } );
const removeMember = payload => ( { type: types.REMOVE_MEMBER, payload } );
const addMember = payload => ( { type: types.ADD_MEMBER, payload } );
const getAllMembers = payload => ( { type: types.GET_ALL_MEMBERS, payload } );

export default {
    getBoards, getAllMembers, createBoard, archiveProject, deleteBoard, archiveBoard, updateBoard, getProject, removeMember, addMember,
};
