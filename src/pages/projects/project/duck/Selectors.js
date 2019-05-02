const users = items => items.map( item => ( { value: item.id, label: `${ item.firstname } ${ item.lastname }` } ) );

export default {
    users,
};
