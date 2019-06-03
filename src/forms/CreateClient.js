import FIELD_TYPES from "./Types";
import {
    isRequired,
    isAlphanumeric,
    minLength,
    maxLength,
    isPhoneNumber,
    isEmail,
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
        type: FIELD_TYPES.TEXTAREA,
        validations: [ isRequired, minLength( 2 ), maxLength( 250 ) ],
    },
    {
        label: "Contact first name",
        name: "contactFirstname",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 25 ),
        ],
    },
    {
        label: "Contact last name",
        name: "contactLastname",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 25 ),
        ],
    },
    {
        label: "Contact email",
        name: "contactEmail",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isEmail,
        ],
    },
    {
        label: "Contact phone number",
        name: "contactPhonenumber",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isPhoneNumber,
        ],
    },
    {
        label: "Logo",
        name: "logo",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 250 ),
        ],
    },
];
