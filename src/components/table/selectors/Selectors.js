import { FILTER_TYPES } from "../../../tables/Types";

const sortDirection = prevDirection => prevDirection - ( prevDirection * 2 );

const isEmptyFilter = value => value === undefined || ( typeof value === "object" && ( value.min === undefined && value.max === undefined ) );

const searchFilterValue = ( filter, { target: { value } } ) => ( {
    ...filter,
    value: value !== "" ? value : undefined,
} );

const selectFilterValue = ( filter, { target: { value } } ) => ( {
    ...filter,
    value: value !== "-1" ? value : undefined,
} );

const rangeFilterValue = ( filter, { target: { name, value } } ) => ( {
    ...filter,
    value: {
        ...filter.value,
        [ name.substring( name.lastIndexOf( "-" ) + 1 ) ]: value !== "" ? value : undefined,
    },
} );

const rangeFilterInputType = type => ( type === FILTER_TYPES.RANGE_DATE ? "date" : "number" );

const linkValue = ( link, data ) => ( link ? link.to.replace( "__KEY__", data[ link.key ] ) : undefined );

export default {
    sortDirection,
    isEmptyFilter,
    searchFilterValue,
    selectFilterValue,
    rangeFilterValue,
    rangeFilterInputType,
    linkValue,
};
