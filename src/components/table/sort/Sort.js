const apply = ( data = [], { id, direction } ) => data.sort( ( a, b ) => {
    if ( a[ id ] < b[ id ] ) return direction;
    if ( a[ id ] > b[ id ] ) return direction * -1;
    return 0;
} );

export default {
    apply,
};
