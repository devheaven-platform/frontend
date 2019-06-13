import FIELD_TYPES from "./Types";
import {
    isRequired,
    isAlphanumeric,
    minLength,
    maxLength,
    isPhoneNumber,
    isEmail,
} from "./Validators";

export default defaults => [
    {
        label: "Name",
        name: "name",
        type: FIELD_TYPES.TEXT,
        default: defaults.name,
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
        type: FIELD_TYPES.TEXT_AREA,
        default: defaults.description,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 250 ),
        ],
    },
    {
        label: "Contact Firstname",
        name: "contactFirstname",
        type: FIELD_TYPES.TEXT,
        default: defaults.contact.firstname,
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
        default: defaults.contact.lastname,
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
        default: defaults.contact.email,
        validations: [
            isRequired,
            isEmail,
        ],
    },
    {
        label: "Contact Phone Number",
        name: "contactPhonenumber",
        type: FIELD_TYPES.TEXT,
        default: defaults.contact.phoneNumber,
        validations: [
            isRequired,
            isPhoneNumber,
        ],
    },
    {
        label: "Logo",
        name: "logo",
        type: FIELD_TYPES.TEXT,
        default: defaults.logo,
        validations: [
            isRequired,
            minLength( 2 ),
            maxLength( 250 ),
        ],
    },
];
