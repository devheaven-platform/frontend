import FIELD_TYPES from "./Types";
import {
    isRequired,
    minLength,
    maxLength,
    isDate,
} from "./Validators";

export default config => [
    {
        label: "Context",
        name: "context",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            minLength( 2 ),
            maxLength( 25 ),
        ],
    },
    {
        label: "Start Date",
        name: "startDate",
        type: FIELD_TYPES.DATETIME,
        validations: [ isDate ],
    },
    {
        label: "End Date",
        name: "endDate",
        type: FIELD_TYPES.DATETIME,
        validations: [ isDate ],
    },
];
