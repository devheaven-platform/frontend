import React from "react";
import PropTypes from "prop-types";

import createMilestoneForm from "forms/CreateMilestone";
import Milestone from "./milestone/Milestone";
import ModalForm from "../../modal/form/Form";

const ProjectMilestones = ( {
    milestones,
    errors,
    create,
    remove,
} ) => {
    const items = milestones.map( milestone => (
        <Milestone
            key={ milestone.id }
            name={ milestone.name }
            description={ milestone.description }
            date={ milestone.date }
            remove={ () => remove( milestone ) }
        />
    ) );

    return (
        <div className="column">
            <div className="is-flex has-space-between has-margin-bottom-2">
                <h5 className="title is-5">Milestones</h5>
                <ModalForm
                    title="Create"
                    description="Create a new milestone."
                    fields={ createMilestoneForm }
                    errors={ errors }
                    submit={ create }
                />
            </div>
            <div className="list">
                { items }
            </div>
        </div>
    );
};

ProjectMilestones.propTypes = {
    milestones: PropTypes.arrayOf( PropTypes.shape() ).isRequired,
    errors: PropTypes.shape(),
    create: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

ProjectMilestones.defaultProps = {
    errors: {},
};

export default ProjectMilestones;
