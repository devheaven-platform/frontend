import moment from "moment";

// eslint-disable-next-line
const _isEmpty = value => !( value !== null && value !== undefined ) || value === "";

// eslint-disable-next-line
const _matchRegex = ( value, regex ) => new RegExp( regex ).test( value )

const isRequired = ( values, value ) => ( value !== undefined && value !== null && value !== ""
    ? true
    : "Required."
);

const isNumeric = ( values, value ) => ( _isEmpty( value ) || typeof value === "number" || _matchRegex( value, "^[-+]?(?:\\d*[.])?\\d+$" )
    ? true
    : "Must be a number."
);

const isAlphanumeric = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^[0-9A-Z]+$/i" )
    ? true
    : "Can only contain numbers and letters."
);

const isEmail = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$" )
    ? true
    : "Must be a valid email."
);

const isPassword = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$" )
    ? true
    : "Must at least contain 1 capital letter, 1 lowercase letter and 1 number."
);

const isDate = ( values, value ) => ( _isEmpty( value ) || moment( value ).isValid()
    ? true
    : "Must be a valid date."
);

const minLength = min => ( values, value ) => ( _isEmpty( value ) || value.length >= min
    ? true
    : `Must be at least ${ min } characters.`
);

const maxLength = max => ( values, value ) => ( _isEmpty( value ) || value.length <= max
    ? true
    : `Must be ${ max } characters or less.`
);

const minValue = min => ( values, value ) => ( _isEmpty( value ) || typeof value === "number" || value >= min
    ? true
    : `Must be at least ${ min }.`
);

const maxValue = max => ( values, value ) => ( _isEmpty( value ) || typeof value === "number" || value <= max
    ? true
    : `Must be ${ max } or less.`
);

export {
    isRequired,
    isNumeric,
    isAlphanumeric,
    isEmail,
    isPassword,
    isDate,
    minLength,
    maxLength,
    minValue,
    maxValue,
};
