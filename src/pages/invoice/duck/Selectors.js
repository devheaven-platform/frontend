const milestones = items => items.map( item => ( { value: item.id, label: item.name } ) );

const projectId = ( { project } ) => project.project.id;

export default {
    milestones,
    projectId,
};
