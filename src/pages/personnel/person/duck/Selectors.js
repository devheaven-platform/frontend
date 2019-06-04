const roles = items => items.map( r => r.role );

const emails = items => items.map( e => e.email );

const employeeId = ( { person } ) => person.person.id;

export default {
    roles,
    emails,
    employeeId,
};
