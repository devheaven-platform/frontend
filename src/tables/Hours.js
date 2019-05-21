import { CELL_TYPES, FILTER_TYPES } from "./Types";

export default [
    {
        label: "Context",
        key: "context",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        label: "Start Date",
        key: "start",
        type: CELL_TYPES.DATE,
        filter: FILTER_TYPES.RANGE_DATE,
    },
    {
        label: "End Date",
        key: "end",
        type: CELL_TYPES.DATE,
        filter: FILTER_TYPES.RANGE_DATE,
    },
    {
        key: "menu",
        type: CELL_TYPES.CONTEXT_MENU,
        icon: "ellipsis-v",
        actions: [
            {
                label: "Delete",
                key: "delete",
                icon: "delete",
            },
        ],
    },
];
