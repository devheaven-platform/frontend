const roles = items => items.map( r => r.role.toLowerCase().replace( "role_", "" ) ).join( ", " );

const emails = items => items.map( e => e.email.toLowerCase() ).join( ", " );

const employeeId = ( { person } ) => person.person.id;

export default {
    roles,
    emails,
    employeeId,
};
