const users = items => items.map( item => ( { value: item.id, label: `${ item.firstname } ${ item.lastname }` } ) );

const projectId = ( { project } ) => project.project.id;

export default {
    users,
    projectId,
};
