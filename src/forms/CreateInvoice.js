import FIELD_TYPES from "./Types";
import {
    isRequired,
    isAlphanumeric,
    minLength,
    maxLength,
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
            maxLength( 25 ),
        ],
    },
    {
        label: "Starting Milestone",
        name: "startMilestone",
        type: FIELD_TYPES.SELECT,
        options: config.project.milestones,
        validations: [ ],
    },
    {
        label: "Ending milestone",
        name: "endMilestone",
        type: FIELD_TYPES.SELECT,
        options: config.project.milestones,
        validations: [ ],
    },
];
