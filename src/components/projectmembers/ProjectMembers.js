import React from "react";
import {
    arrayOf, shape, func,
} from "prop-types";
import {
    Modal, Form,
} from "components";

const ProjectMembers = ( {
    members,
    allMembersList,
    addMember,
} ) => (

    <div className="box">
        <b>
                                    Members
        </b>
        { " " }

        <Modal
            title="+"
            description="Add a member to this project."
            body={ (
                <Form
                    form="addMemberForm"
                    onSubmit={ addMember }
                >
                    <div className="list">
                        { allMembersList }
                    </div>
                </Form>
            ) }

            enableCancelButton
        />

        <hr />
        <div className="list">
            { members }
        </div>
    </div>
);

ProjectMembers.defaultProps = {
    members: [],
    allMembersList: [],

};

ProjectMembers.propTypes = {
    members: arrayOf( shape( {} ) ),
    allMembersList: arrayOf( shape( {} ) ),
    addMember: func.isRequired,

};
export default ProjectMembers;
