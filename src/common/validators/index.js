const required = value => ( value || typeof value === "number"
    ? undefined
    : "Required"
);

const minLength = min => value => ( value && value.length < min
    ? `Must be ${ min } characters or more`
    : undefined
);

const maxLength = max => value => ( value && value.length > max
    ? `Must be ${ max } characters or less`
    : undefined
);

const number = value => ( value && Number.isNaN( Number( value ) )
    ? "Must be a number"
    : undefined
);

const minValue = min => value => ( value && value < min
    ? `Must be at least ${ min }`
    : undefined
);

const maxValue = max => value => ( value && value > max
    ? `Must be ${ max } or less`
    : undefined
);

const email = value => ( value && !new RegExp( "^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$" ).test( value )
    ? "Invalid email address"
    : undefined
);

const password = value => ( value && !new RegExp( "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$" ).test( value )
    ? "Must at least contain 1 capital letter, 1 lowercase letter and 1 number."
    : undefined
);

const phone = value => ( value && !new RegExp( "^(?=^.{10,11}$)0\\d*-?\\d*$" ).test( value )
    ? "Invalid phone number, must be 10 digits"
    : undefined
);

export {
    required,
    minLength,
    maxLength,
    number,
    minValue,
    maxValue,
    email,
    password,
    phone,
};
