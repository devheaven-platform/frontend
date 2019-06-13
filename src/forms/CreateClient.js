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
            maxLength( 40 ),
        ],
    },
    {
        label: "Description",
        name: "description",
        type: FIELD_TYPES.TEXTAREA,
        validations: [ isRequired, minLength( 2 ), maxLength( 250 ) ],
    },
    {
        label: "Contact Firstname",
        name: "contactFirstname",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 20 ),
        ],
    },
    {
        label: "Contact Lastname",
        name: "contactLastname",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 20 ),
        ],
    },
    {
        label: "Contact Email",
        name: "contactEmail",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isEmail,
        ],
    },
    {
        label: "Contact Phone Number",
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
            minLength( 2 ),
            maxLength( 250 ),
        ],
    },
];
