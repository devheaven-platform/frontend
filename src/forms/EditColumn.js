import FIELD_TYPES from "./Types";
import { isAlphanumeric, minLength, maxLength } from "./Validators";

export default defaults => [
    {
        label: "Name",
        name: "name",
        default: defaults.name,
        type: FIELD_TYPES.TEXT,
        validations: [
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 20 ),
        ],
    },
];
