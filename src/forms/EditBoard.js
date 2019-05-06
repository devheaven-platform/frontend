import FIELD_TYPES from "./Types";
import {
    isAlphanumeric,
    minLength,
    maxLength,
} from "./Validators";

export default defaults => [
    {
        label: "Name",
        name: "name",
        type: FIELD_TYPES.TEXT,
        default: defaults.name,
        validations: [
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 25 ),
        ],
    },
    {
        label: "Status",
        name: "status",
        type: FIELD_TYPES.SELECT,
        defaults: defaults.status,
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
];
