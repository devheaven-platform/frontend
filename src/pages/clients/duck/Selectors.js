const roles = items => items.map( ( role => role.role ).join( ", " ) );

export default {
    roles,
};
