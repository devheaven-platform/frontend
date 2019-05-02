import FIELD_TYPES from "./Types";
import {
    isRequired,
    isNumeric,
    isAlphanumeric,
    minLength,
    maxLength,
    minValue,
    isDate,
} from "./Validators";

export default config => [
    {
        label: "Name",
        name: "name",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 250 ),
        ],
    },
    {
        label: "Description",
        name: "description",
        type: FIELD_TYPES.TEXTAREA,
        validations: [ minLength( 2 ), maxLength( 250 ) ],
    },
    {
        label: "Budget",
        name: "budget",
        type: FIELD_TYPES.NUMBER,
        validations: [ isNumeric, minValue( 0 ) ],
    },
    {
        label: "Start Date",
        name: "start",
        type: FIELD_TYPES.DATE,
        validations: [ isDate ],
    },
    {
        label: "Client",
        name: "client",
        type: FIELD_TYPES.SELECT,
        options: config.clients,
        validations: [ isRequired ],
    },
];
