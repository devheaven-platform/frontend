import { CELL_TYPES, FILTER_TYPES } from "./Types";

export default [
    {
        label: "Name",
        key: "name",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
        link: {
            to: "/boards/__KEY__",
            key: "id",
        },
    },
    {
        label: "Status",
        key: "status",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SELECT,
        options: [
            {
                value: "Open",
                label: "Open",
            },
            {
                value: "Closed",
                label: "Closed",
            },
        ],
    },
    {
        label: "Archived",
        key: "archived",
        type: CELL_TYPES.BOOLEAN,
        filter: FILTER_TYPES.SELECT,
        options: [
            {
                value: true,
                label: "Yes",
            },
            {
                value: false,
                label: "No",
            },
        ],
    },
    {
        key: "menu",
        type: CELL_TYPES.CONTEXT_MENU,
        icon: "ellipsis-v",
        actions: [
            {
                label: "Edit",
                key: "edit",
                icon: "edit",
            },
            {
                label: "Archive",
                key: "archive",
                icon: "archive",
            },
        ],
    },
];
