import FIELD_TYPES from "./Types";
import {
    isRequired,
    isNumeric,
    isAlphanumeric,
    minLength,
    maxLength,
    minValue,
    isDate,
} from "./Validators";

export default config => [
    {
        label: "Name",
        name: "name",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 50 ),
        ],
    },
    {
        label: "Description",
        name: "description",
        type: FIELD_TYPES.TEXTAREA,
        validations: [ minLength( 2 ), maxLength( 250 ) ],
    },
    {
        label: "Identifier",
        name: "identifier",
        type: FIELD_TYPES.SELECT,
        options: [
            {
                value: "MONEY",
                label: "Money",
            },
            {
                value: "STORY_POINTS",
                label: "Story Points",
            },
            {
                value: "HOURS",
                label: "Hours",
            },
        ],
        validations: [ isRequired ],
    },
    {
        label: "Identifier Value",
        name: "pricePerPoint",
        type: FIELD_TYPES.NUMBER,
        validations: [ isNumeric, minValue( 0 ), isRequired ],
    },
    {
        label: "Profit Margin",
        name: "invoiceMargin",
        type: FIELD_TYPES.NUMBER,
        validations: [ isNumeric, minValue( 0 ), isRequired ],
    },
    {
        label: "Start Date",
        name: "start",
        type: FIELD_TYPES.DATE,
        validations: [ isDate ],
    },
    {
        label: "Client",
        name: "client",
        type: FIELD_TYPES.SELECT,
        options: config.clients,
        validations: [ isRequired ],
    },
];
