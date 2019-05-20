import { CELL_TYPES, FILTER_TYPES } from "./Types";

export default [
    {
        label: "Name",
        key: "name",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.SEARCH,
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
                label: "Download",
                key: "download",
                icon: "download",
            },
            {
                label: "Archive",
                key: "archive",
                icon: "archive",
            },
        ],
    },

];
