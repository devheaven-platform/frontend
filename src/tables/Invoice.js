import { CELL_TYPES, FILTER_TYPES } from "./Types";

export default [
    {
        label: "Name",
        key: "name",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
        link: {
            to: "/api/invoices/pdf/__KEY__",
            key: "id",
        },
    },
    {
        label: "Total",
        key: "total",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.RANGE_NUMBER,
    },
    {
        label: "Project",
        key: "project",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        key: "menu",
        type: CELL_TYPES.CONTEXT_MENU,
        icon: "ellipsis-v",
        actions: [
            {
                label: "Download",
                key: "download",
                icon: "download",
            },
        ],
    },
];
