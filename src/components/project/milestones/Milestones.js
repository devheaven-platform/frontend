import React from "react";
import PropTypes from "prop-types";

const ProjectMilestones = ( { milestones, add, remove } ) => (
    <div className="column">
        Milestones
    </div>
);

ProjectMilestones.propTypes = {
    milestones: PropTypes.arrayOf( PropTypes.shape() ).isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default ProjectMilestones;
