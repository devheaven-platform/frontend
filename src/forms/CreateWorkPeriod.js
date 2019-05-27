import moment from "moment";
import FIELD_TYPES from "./Types";
import {
    isRequired,
    minLength,
    maxLength,
    isDate,
    isTime,
} from "./Validators";

export default config => [
    {
        label: "Description",
        name: "context",
        type: FIELD_TYPES.TEXT,
        validations: [
            isRequired,
            minLength( 5 ),
            maxLength( 25 ),
        ],
    },
    {
        label: "Date",
        name: "date",
        default: moment( new Date() ).format( "YYYY-MM-DD" ),
        type: FIELD_TYPES.DATE,
        validations: [ isDate ],
    },
    {
        label: "Begin time",
        name: "startTime",
        type: FIELD_TYPES.TIME,
        validations: [ isTime ],
    }, {
        label: "End time",
        name: "endTime",
        type: FIELD_TYPES.TIME,
        validations: [ isTime ],
    },
];
