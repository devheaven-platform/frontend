import * as jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";
const TIMESTAMP_KEY = "timestamp";

/**
 * Gets a token from localstorage.
 *
 * @returns the token if it is valid.
 */
const getToken = () => {
    const token = localStorage.getItem( TOKEN_KEY );
    const timestamp = localStorage.getItem( TIMESTAMP_KEY );
    if ( !token || !timestamp || new Date().getTime() >= parseFloat( timestamp ) ) {
        return null;
    }
    return token;
};

/**
 * Stores the token and timestamp.
 *
 * @param {String} token the token to store.
 * @param {Number} timestamp the timestamp to store.
 */
const setToken = ( token, timestamp ) => {
    localStorage.setItem( TOKEN_KEY, token );
    localStorage.setItem( TIMESTAMP_KEY, timestamp );
};

/**
 * Removes the token from localstorage.
 */
const removeToken = () => {
    localStorage.removeItem( TOKEN_KEY );
    localStorage.removeItem( TIMESTAMP_KEY );
};

/**
 * Gets the id from a token.
 *
 * @param {String} token the token to get the id from.
 * @returns the id or null.
 */
const idFromToken = ( token ) => {
    const decoded = jwtDecode( token );
    return decoded.sub || null;
};

/**
 * Gets the roles from the token.
 *
 * @param {String} token the token to retrive the
 * roles from.
 * @returns array of roles or an empty array.
 */
const rolesFromToken = ( token ) => {
    const decoded = jwtDecode( token );
    if ( decoded.roles ) {
        return Object.entries( decoded.roles ).map( item => item[ 1 ] );
    }
    return [];
};

export default {
    getToken,
    setToken,
    removeToken,
    idFromToken,
    rolesFromToken,
};
