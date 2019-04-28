import React from "react";
import {
    arrayOf, shape, func,
} from "prop-types";
import {
    Modal, Form, FormField, SubmitButton,
} from "components";
import { required } from "common/validators";

const ProjectMilestones = ( {
    milestones,
    addMilestone,
} ) => (

    <div className="box">
        <b>
                                    Milestones
        </b>
        { " " }

        <Modal
            title="+"
            description="Add a milestone to this project."
            body={ (
                <Form
                    form="addMilestoneForm"
                    onSubmit={ addMilestone }
                >
                    <FormField validate={ [ required ] } name="name" type="text" label="Name" placeholder="Name" />
                    <FormField validate={ [ required ] } name="description" type="text" label="Description" placeholder="Description" />
                    <FormField validate={ [ required ] } name="date" type="date" label="Target date" />
                </Form>
            ) }
            footer={
                <SubmitButton form="addMilestoneForm">Create</SubmitButton>
            }

            enableCancelButton
        />
        <hr />
        <div className="list">
            { milestones }
        </div>
    </div>
);

ProjectMilestones.defaultProps = {
    milestones: [],
};

ProjectMilestones.propTypes = {
    milestones: arrayOf( shape( {} ) ),
    addMilestone: func.isRequired,

};
export default ProjectMilestones;
