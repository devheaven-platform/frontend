import FIELD_TYPES from "./Types";
import { isRequired, isEmail, isPassword } from "./Validators";

export default [
    {
        label: "Email",
        name: "email",
        type: FIELD_TYPES.TEXT,
        validations: [ isRequired, isEmail ],
    },
    {
        label: "Password",
        name: "password",
        type: FIELD_TYPES.PASSWORD,
        validations: [ isRequired, isPassword ],
    },
];
