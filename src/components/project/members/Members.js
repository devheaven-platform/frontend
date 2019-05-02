import React from "react";
import PropTypes from "prop-types";

const ProjectMembers = ( { members, add, remove } ) => (
    <div className="column">
        <h6 className="title is-6">Members</h6>
    </div>
);

ProjectMembers.propTypes = {
    members: PropTypes.arrayOf( PropTypes.shape() ).isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default ProjectMembers;
