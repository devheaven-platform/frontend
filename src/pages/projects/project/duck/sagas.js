import { call, put, takeEvery } from "redux-saga/effects";
import { Axios } from "common/helpers";
import types from "./types";
import actions from "./actions";

function* getProjects() {
    try {
        const { data } = yield call(Axios.get, "/project/getall");
        yield put({ type: types.GETPROJECTS_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GETPROJECTS_ERROR, error });
    }
}

function* createProject(action) {
    try {
        const { data } = yield call(Axios.post, "/project/createproject", action.payload);
        yield put({ type: types.CREATEPROJECT_SUCCESS, payload: data });
    }
    catch (error) {
        yield put({type: types.CREATEPROJECT_ERROR, payload: error});
    }
}

export default function* main() {
    yield takeLatest(types.GETPROJECTS, getProjects);
    yield takeLatest(types.CREATEPROJECT, createProject);

}

