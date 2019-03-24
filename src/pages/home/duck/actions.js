import { createFormAction } from "redux-form-saga";
import types from "./types";

const submit = createFormAction( types.SUBMIT_FORM );

export default {
    submit,
};
