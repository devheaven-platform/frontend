import FIELD_TYPES from "./Types";
import {
    isAlphanumeric,
    minLength,
    maxLength,
    isNumeric,
    minValue,
    maxValue,
} from "./Validators";

export default defaults => [
    {
        label: "Name",
        name: "name",
        default: defaults.name,
        type: FIELD_TYPES.TEXT,
        validations: [
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 25 ),
        ],
    },
    {
        label: "Description",
        name: "description",
        default: defaults.description,
        type: FIELD_TYPES.TEXT,
        validations: [
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 250 ),
        ],
    },
    {
        label: "Hours",
        name: "hours",
        default: defaults.hours,
        type: FIELD_TYPES.NUMBER,
        validations: [
            isNumeric,
            minValue( 0 ),
            maxValue( 100 ),
        ],
    },
];
