import React from "react";
import PropTypes from "prop-types";

import addMemberForm from "forms/AddMember";
import Member from "./member/Member";
import ModalForm from "../../modal/form/Form";

const ProjectMembers = ( {
    members,
    users,
    errors,
    add,
    remove,
} ) => {
    const items = members.map( member => (
        <Member
            key={ member.id }
            firstname={ member.firstname }
            lastname={ member.lastname }
            remove={ () => remove( member ) }
        />
    ) );

    return (
        <div className="column">
            <div className="is-flex has-space-between has-margin-bottom-2">
                <h5 className="title is-5">Members</h5>
                <ModalForm
                    title="Add"
                    description="Add a new member."
                    fields={ addMemberForm( { users } ) }
                    errors={ errors }
                    submit={ add }
                />
            </div>
            <div className="list">
                { items }
            </div>
        </div>
    );
};

ProjectMembers.propTypes = {
    members: PropTypes.arrayOf( PropTypes.shape() ).isRequired,
    users: PropTypes.arrayOf( PropTypes.shape() ).isRequired,
    errors: PropTypes.shape(),
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

ProjectMembers.defaultProps = {
    errors: {},
};

export default ProjectMembers;
