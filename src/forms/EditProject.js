import moment from "moment";

import FIELD_TYPES from "./Types";
import {
    isNumeric,
    isAlphanumeric,
    minLength,
    maxLength,
    minValue,
    isDate,
    isRequired,
} from "./Validators";

export default ( config, defaults ) => [
    {
        label: "Name",
        name: "name",
        type: FIELD_TYPES.TEXT,
        default: defaults.name,
        validations: [
            isAlphanumeric,
            minLength( 2 ),
            maxLength( 50 ),
        ],
    },
    {
        label: "Description",
        name: "description",
        type: FIELD_TYPES.TEXTAREA,
        default: defaults.description,
        validations: [ minLength( 2 ), maxLength( 250 ) ],
    },
    {
        label: "Invoicing Type",
        name: "identifier",
        type: FIELD_TYPES.SELECT,
        default: defaults.identifier,
        options: [
            {
                value: "MONEY",
                label: "Money",
            },
            {
                value: "STORY_POINTS",
                label: "Story Points",
            },
            {
                value: "HOURS",
                label: "Hours",
            },
        ],
        validations: [ isRequired ],
    },
    {
        label: "Invoicing Value (€)",
        name: "pricePerPoint",
        type: FIELD_TYPES.NUMBER,
        help: "Price per unit defined by the invoicing type.",
        default: defaults.pricePerPoint,
        validations: [ isNumeric, minValue( 0 ) ],
    },
    {
        label: "Profit Margin (%)",
        name: "invoiceMargin",
        type: FIELD_TYPES.NUMBER,
        default: defaults.invoiceMargin,
        validations: [ isNumeric, minValue( 0 ) ],
    },
    {
        label: "Start Date",
        name: "start",
        type: FIELD_TYPES.DATE,
        default: moment( defaults.start ).format( "YYYY-MM-DD" ),
        validations: [ isDate ],
    },
    {
        label: "Client",
        name: "client",
        type: FIELD_TYPES.SELECT,
        options: config.clients,
        default: defaults.client,
        validations: [ isRequired ],
    },
    {
        label: "Owner",
        name: "owner",
        type: FIELD_TYPES.SELECT,
        options: config.users,
        default: defaults.owner.id,
    },
];
