const roles = items => items.map( r => r.role.toLowerCase().replace( "role_", "" ) ).join( ", " );

export default {
    roles,
};
