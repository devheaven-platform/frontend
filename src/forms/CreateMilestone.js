import FIELD_TYPES from "./Types";
import {
    isRequired,
    isAlphanumeric,
    minLength,
    maxLength,
    isDate,
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
            maxLength( 20 ),
        ],
    },
    {
        label: "Description",
        name: "description",
        type: FIELD_TYPES.TEXTAREA,
        validations: [ minLength( 2 ), maxLength( 250 ) ],
    },
    {
        label: "Date",
        name: "date",
        type: FIELD_TYPES.DATE,
        validations: [ isRequired, isDate ],
    },
];
