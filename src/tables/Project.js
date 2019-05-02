import { CELL_TYPES, FILTER_TYPES } from "./Types";

export default [
    {
        label: "Name",
        key: "name",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
        link: {
            to: "/projects/__KEY__",
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
        label: "Budget",
        key: "budget",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.RANGE_NUMBER,
    },
    {
        label: "Start Date",
        key: "start",
        type: CELL_TYPES.DATE,
        filter: FILTER_TYPES.RANGE_DATE,
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
                label: "Archive",
                key: "archive",
                icon: "archive",
            },
        ],
    },
];
