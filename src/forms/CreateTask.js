import FIELD_TYPES from "./Types";
import {
    isRequired,
    isAlphanumeric,
    minLength,
    maxLength,
} from "./Validators";

export default [
    {
        label: "Name",
        name: "name",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 25 ),
        ],
    },
    {
        label: "Description",
        name: "description",
        type: FIELD_TYPES.TEXT,
        validations: [
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 250 ),
        ],
    },
];
