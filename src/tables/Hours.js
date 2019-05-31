import { CELL_TYPES, FILTER_TYPES } from "./Types";

export default [
    {
        label: "Description",
        key: "context",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        label: "Date",
        key: "date",
        type: CELL_TYPES.DATE,
        filter: FILTER_TYPES.RANGE_DATE,
    },
    {
        label: "Begin time",
        key: "beginTime",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        label: "End time",
        key: "endTime",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        label: "Hours",
        key: "hours",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        key: "menu",
        type: CELL_TYPES.CONTEXT_MENU,
        icon: "ellipsis-v",
        actions: [
            {
                label: "Delete",
                key: "delete",
                icon: "trash",
            },
        ],
    },
];
