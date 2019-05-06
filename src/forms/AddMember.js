import FIELD_TYPES from "./Types";
import { isRequired } from "./Validators";

export default config => [
    {
        label: "User",
        name: "user",
        type: FIELD_TYPES.SELECT,
        options: config.users,
        validations: [ isRequired ],
    },
];
