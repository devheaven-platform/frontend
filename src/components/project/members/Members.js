import React from "react";
import PropTypes from "prop-types";

const ProjectMembers = ( { members, add, remove } ) => (
    <div className="column">
        Members
    </div>
);

ProjectMembers.propTypes = {
    members: PropTypes.arrayOf( PropTypes.shape() ).isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default ProjectMembers;
