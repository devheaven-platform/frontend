const roles = items => items.map( ( role => role.role ).join( ", " ) );

const emails = items => items.map( ( email => email.email ).join( ", " ) );

const employeeId = ( { person } ) => person.person.id;

export default {
    roles,
    emails,
    employeeId,
};
