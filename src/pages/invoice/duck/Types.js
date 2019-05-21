import types from "redux-types";

export default types( "@invoices", [
    "LOAD",
    "LOAD_SUCCESS",
    "CREATE",
    "CREATE_SUCCESS",
    "CREATE_ERROR",
    "ARCHIVE",
    "ARCHIVE_SUCCESS",
    "ARCHIVE_ERROR",
] );
