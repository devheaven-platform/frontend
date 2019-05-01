const errorType = ( error, validationError, appError ) => ( error.data && error.data.errors ? validationError : appError );

const errorPayload = ( { data, message } ) => ( data && data.errors ? data.errors : ( data && data.message ) || message );

export default {
    errorType,
    errorPayload,
};
