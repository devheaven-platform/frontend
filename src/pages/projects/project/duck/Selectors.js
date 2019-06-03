const users = items => items.map( item => ( { value: item.id, label: `${ item.firstname } ${ item.lastname }` } ) );

const projectId = ( { project } ) => project.project.id;

const clients = items => items.map( item => ( { value: item.id, label: item.name } ) );

export default {
    users,
    projectId,
    clients,
};
