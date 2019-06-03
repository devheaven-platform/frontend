import { CELL_TYPES, FILTER_TYPES } from "./Types";

export default [
    {
        label: "Name",
        key: "name",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
        link: {
            to: "/clients/__KEY__",
            key: "id",
        },
    },
    {
        label: "Description",
        key: "description",
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
