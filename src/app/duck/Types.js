import types from "redux-types";

export default types( "@app", [
    "INIT",
    "LOGIN",
    "LOGIN_GOOGLE",
    "LOGIN_SUCCESS",
    "LOGIN_ERROR",
    "LOGOUT",
    "VALIDATE_CONNECTION_SUCCESS",
    "VALIDATE_CONNECTION_ERROR",
] );
