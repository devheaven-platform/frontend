import { call, put, takeEvery } from "redux-saga/effects";
import { Axios } from "common/helpers";
import types from "./types";
import actions from "./actions";
import takeLatest from "redux-saga";


function* getProjects() {
    try {
        const { data } = yield call(Axios.get, "/project/getall");
        yield put({ type: types.GET_PROJECTS_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_PROJECTS_ERROR, error });
    }
}

function* createProject(action) {
    try {
        const { data } = yield call(Axios.post, "/project/createproject", action.payload);
        yield put({ type: types.CREATE_PROJECT_SUCCESS, payload: data });
    }
    catch (error) {
        yield put({type: types.CREATE_PROJECT_ERROR, payload: error});
    }
}

export default function* main() {
    yield takeLatest(types.GET_PROJECTS, getProjects);
    yield takeLatest(types.CREATE_PROJECT, createProject);
}

