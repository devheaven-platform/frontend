import { CELL_TYPES, FILTER_TYPES } from "./Types";

export default [
    {
        label: "Firstname",
        key: "firstname",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        label: "Lastname",
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
        label: "Phone Number",
        key: "phoneNumber",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        label: "Address",
        key: "address",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        key: "menu",
        type: CELL_TYPES.CONTEXT_MENU,
        icon: "ellipsis-v",
        actions: [
            {
                label: "Remove",
                key: "remove",
                icon: "trash",
            },
            {
                label: "Edit",
                key: "edit",
                icon: "edit",
            },
        ],
    },
];
