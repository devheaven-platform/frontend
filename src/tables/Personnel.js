import { CELL_TYPES, FILTER_TYPES } from "./Types";

export default [
    {
        label: "First name",
        key: "firstname",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        label: "Last name",
        key: "lastname",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        label: "Salary",
        key: "salary",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.RANGE_NUMBER,
    },
    {
        label: "Address",
        key: "address",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
];
