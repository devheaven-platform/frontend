import { CELL_TYPES, FILTER_TYPES } from "./Types";

export default [
    {
        label: "First name",
        key: "firstname",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
        link: {
            to: "/personnel/__KEY__",
            key: "id",
        },
    },
    {
        label: "Lastname",
        key: "lastname",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
    },
    {
        label: "Roles",
        key: "roles",
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
        ],
    },
];