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
        label: "Start Date",
        key: "start",
        type: CELL_TYPES.DATE,
        filter: FILTER_TYPES.RANGE_DATE,
    },
    {
        label: "Profit Margin (%)",
        key: "invoiceMargin",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.RANGE_NUMBER,
    },
    {
        label: "Invoicing Type",
        key: "identifier",
        type: CELL_TYPES.ICON,
        filter: FILTER_TYPES.SELECT,
        options: [
            {
                value: "HOURS",
                label: "Hours",
            },
            {
                value: "STORY_POINTS",
                label: "Story Points",
            },
            {
                value: "MONEY",
                label: "Money",
            },
        ],
    },
    {
        label: "Invoicing Value (€)",
        key: "pricePerPoint",
        type: CELL_TYPES.TEXT,
        filter: FILTER_TYPES.RANGE_NUMBER,
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
