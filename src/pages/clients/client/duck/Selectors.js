const roles = items => items.map( ( role => role.role ).join( ", " ) );

const emails = items => items.map( ( email => email.email ).join( ", " ) );

const clientId = ( { client } ) => client.client.id;

export default {
    roles,
    emails,
    clientId,
};
