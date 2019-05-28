import FIELD_TYPES from "./Types";
import {
    isRequired,
    isAlphanumeric,
    minLength,
    maxLength,
    isNumeric,
    minValue,
} from "./Validators";

export default [
    {
        label: "First name",
        name: "firstname",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 20 ),
        ],
    },
    {
        label: "Last name",
        name: "lastname",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 20 ),
        ],
    },
    {
        label: "Password",
        name: "password",
        type: FIELD_TYPES.PASSWORD,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 20 ),
        ],
    },
    {
        label: "Salary",
        name: "salary",
        type: FIELD_TYPES.NUMBER,
        validations: [
            isNumeric,
            minValue( 0 ),
        ],
    },
    {
        label: "Address",
        name: "address",
        type: FIELD_TYPES.TEXT,
        validations: [
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 25 ),
        ],
    },
];
