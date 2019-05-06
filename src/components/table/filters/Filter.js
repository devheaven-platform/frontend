/* eslint-disable no-restricted-syntax, complexity */
import { FILTER_TYPES } from "../../../tables/Types";

const matchString = ( target, filter ) => {
    const a = target.toLowerCase();
    const b = filter.toLowerCase();
    return !a.includes( b );
};

const matchNumber = ( target, filter ) => target !== filter;

const matchExact = ( target, filter ) => target !== filter;

const matchBoolean = ( target, filter ) => {
    const a = target;
    const b = filter !== "true";
    return a === b;
};

const matchRangeNumbers = ( target, filter ) => {
    const a = parseFloat( target );
    const min = parseFloat( filter.min );
    const max = parseFloat( filter.max );
    return a < min || a > max;
};

const matchRangeDate = ( target, filter ) => {
    const a = new Date( target );
    const min = new Date( filter.min );
    const max = new Date( filter.max );
    return a < min || a > max;
};

const filterItem = ( item, filters ) => {
    for ( const filter of filters ) {
        const { id, type, value } = filter;
        const target = item[ id ];

        // Search (string)
        if ( type === FILTER_TYPES.SEARCH && typeof target === "string" && matchString( target, value ) ) return false;

        // Search (number)
        if ( type === FILTER_TYPES.SEARCH && typeof target === "number" && matchNumber( target, value ) ) return false;

        // Select (default)
        if ( type === FILTER_TYPES.SELECT && !( value === "true" || value === "false" ) && matchExact( target, value ) ) return false;

        // Select (boolean)
        if ( type === FILTER_TYPES.SELECT && ( value === "true" || value === "false" ) && matchBoolean( target, value ) ) return false;

        // Range (number)
        if ( type === FILTER_TYPES.RANGE_NUMBER && matchRangeNumbers( target, value ) ) return false;

        // Range (date)
        if ( type === FILTER_TYPES.RANGE_DATE && matchRangeDate( target, value ) ) return false;
    }
    return true;
};

const apply = ( data = [], filters = [] ) => data.filter( item => filterItem( item, filters ) );

export default {
    apply,
};
/* eslint-enable no-restricted-syntax, complexity */
