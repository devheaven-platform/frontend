import FIELD_TYPES from "./Types";
import {
    isRequired,
    isPassword,
    isAlphanumeric,
    minLength,
    maxLength,
    isNumeric,
    minValue,
    isPhoneNumber,
} from "./Validators";

export default [
    {
        label: "Firstname",
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
        label: "Lastname",
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
            isPassword,
            minLength( 6 ),
            maxLength( 40 ),
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
    {
        label: "Phone number",
        name: "number",
        type: FIELD_TYPES.TEXT,
        validations: [
            isPhoneNumber,
        ],
    },
    {
        label: "Roles",
        name: "roles",
        type: FIELD_TYPES.MUTLISELECT,
        options: [
            {
                value: "ROLE_USER",
                label: "User",
            },
            {
                value: "ROLE_DEVELOPER",
                label: "Developer",
            },
            {
                value: "ROLE_HR",
                label: "HR",
            },
            {
                value: "ROLE_MANAGER",
                label: "Manager",
            },
        ],
        validations: [ isRequired ],
    },
];
