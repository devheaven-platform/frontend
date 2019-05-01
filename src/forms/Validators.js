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

export {
    isRequired,
    isNumeric,
    isAlphanumeric,
    isEmail,
    isPassword,
};
