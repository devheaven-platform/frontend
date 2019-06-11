import FIELD_TYPES from "./Types";
import {
    useList,
    isEmail,
    isRequired,
    isPassword,
    isAlphanumeric,
    minLength,
    maxLength,
    isNumeric,
    minValue,
    isPhoneNumber,
} from "./Validators";

export default defaults => [
    {
        label: "Firstname",
        name: "firstname",
        type: FIELD_TYPES.TEXT,
        default: defaults.firstname,
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
        default: defaults.lastname,
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
        type: FIELD_TYPES.TEXT,
        default: defaults.password,
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
        default: defaults.salary,
        validations: [
            isNumeric,
            minValue( 0 ),
        ],
    },
    {
        label: "Address",
        name: "address",
        type: FIELD_TYPES.TEXT,
        default: defaults.address,
        validations: [
            minLength( 2 ),
            maxLength( 80 ),
        ],
    },
    {
        label: "Phone number",
        name: "phoneNumber",
        type: FIELD_TYPES.TEXT,
        default: defaults.phoneNumber,
        validations: [
            isPhoneNumber,
            isRequired,
        ],
    },
    {
        label: "Roles",
        name: "roles",
        type: FIELD_TYPES.MUTLISELECT,
        default: defaults.roles,
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
    {
        label: "Emails",
        name: "emails",
        type: FIELD_TYPES.LIST,
        default: defaults.emails,
        validations: [ isRequired, useList( isRequired ), useList( isEmail ) ],
    },
];
