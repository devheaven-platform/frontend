import moment from "moment";

// eslint-disable-next-line
const _isEmpty = value => !( value !== null && value !== undefined ) || value === "";

// eslint-disable-next-line
const _matchRegex = ( value, regex ) => new RegExp( regex ).test( value )

const useList = validation => ( values, value ) => {
    if ( value !== undefined ) {
        // eslint-disable-next-line
        for ( const v of value ) {
            const result = validation( values, v );
            if ( result !== true ) {
                return `All the values ${ result.toLowerCase() }`;
            }
        }
    }
    return true;
};

const isRequired = ( values, value ) => ( value !== undefined && value !== null && value !== ""
    ? true
    : "Required."
);

const isNumeric = ( values, value ) => ( _isEmpty( value ) || typeof value === "number" || _matchRegex( value, "^[-+]?(?:\\d*[.])?\\d+$" )
    ? true
    : "Must be a number."
);

const isAlphanumeric = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^[a-zA-Z0-9_ ]*$" )
    ? true
    : "Can only contain numbers and letters."
);

const isEmail = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$" )
    ? true
    : "Must be a valid email."
);

const isPassword = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$" )
    ? true
    : "Must at least contain 1 capital letter, 1 lowercase letter and 1 number."
);

const isPhoneNumber = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$" )
    ? true
    : "Must be a valid phone number."
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

const minValue = min => ( values, value ) => ( _isEmpty( value ) || value >= min
    ? true
    : `Must be at least ${ min }.`
);

const maxValue = max => ( values, value ) => ( _isEmpty( value ) || value <= max
    ? true
    : `Must be ${ max } or less.`
);

const isTime = ( values, value ) => ( _isEmpty( value ) || !_matchRegex( value, "^(0?[1-9]|1[0-2]):[0-5][0-9]\\d$" ) ? true : "Must be a valid time" );

export {
    useList,
    isRequired,
    isNumeric,
    isAlphanumeric,
    isEmail,
    isPassword,
    isDate,
    isTime,
    minLength,
    maxLength,
    minValue,
    maxValue,
    isPhoneNumber,
};
