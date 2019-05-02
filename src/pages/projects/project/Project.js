/* eslint complexity: 0 */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import editProjectForm from "forms/EditProject";
import { PageLoading } from "pages";
import {
    Page,
    ProjectDetails,
    ProjectMembers,
    ProjectMilestones,
    ModalForm,
} from "components";
import { actions } from "./duck";

class PageProject extends React.Component {
    static propTypes = {
        project: PropTypes.shape(),
        members: PropTypes.arrayOf( PropTypes.shape() ),
        milestones: PropTypes.arrayOf( PropTypes.shape() ),
        boards: PropTypes.arrayOf( PropTypes.shape() ),
        users: PropTypes.arrayOf( PropTypes.shape() ),
        errors: PropTypes.shape(),
        match: PropTypes.shape().isRequired,
        Load: PropTypes.func.isRequired,
        EditProject: PropTypes.func.isRequired,
        ArchiveProject: PropTypes.func.isRequired,
        AddMember: PropTypes.func.isRequired,
        RemoveMember: PropTypes.func.isRequired,
        AddMilestone: PropTypes.func.isRequired,
        RemoveMilestone: PropTypes.func.isRequired,
        CreateBoard: PropTypes.func.isRequired,
        EditBoard: PropTypes.func.isRequired,
        ArchiveBoard: PropTypes.func.isRequired,
    }

    static defaultProps = {
        project: null,
        members: null,
        milestones: null,
        boards: null,
        users: null,
        errors: {},
    }

    componentDidMount() {
        const { Load, match } = this.props;
        Load( match.params.projectId );
    }

    render() {
        const {
            project,
            members,
            milestones,
            boards,
            users,
            errors,
            EditProject,
            ArchiveProject,
            AddMember,
            RemoveMember,
            AddMilestone,
            RemoveMilestone,
        } = this.props;

        if ( project === null || members === null || milestones === null || boards === null || users === null ) {
            return <PageLoading />;
        }

        return (
            <Page>
                <Page.Header title={ project.name } subtitle={ project.description }>
                    <ModalForm
                        title="Edit"
                        description="Edit this project."
                        fields={ editProjectForm( { users }, project ) }
                        errors={ errors }
                        submit={ EditProject }
                    />
                    <button type="button" className="button is-danger has-margin-left-2" onClick={ () => ArchiveProject( project ) }>Archive</button>
                </Page.Header>
                <Page.Content>
                    <div className="columns">
                        <ProjectDetails
                            client={ project.client }
                            owner={ project.owner }
                            start={ project.start }
                            updatedAt={ project.updatedAt }
                        />
                    </div>
                    <hr />
                    <div className="columns">
                        <ProjectMembers
                            members={ members }
                            add={ AddMember }
                            remove={ RemoveMember }
                        />
                        <ProjectMilestones
                            milestones={ milestones }
                            add={ AddMilestone }
                            remove={ RemoveMilestone }
                        />
                    </div>
                    <hr />
                    <div className="columns">
                        <div className="column">
                            Boards
                        </div>
                    </div>
                </Page.Content>
                <Page.Footer>
                    <p>
                        { `Copyright © ${ new Date().getFullYear() } Devheaven.nl`}
                    </p>
                </Page.Footer>
            </Page>
        );
    }
}

const mSTP = ( {
    project: {
        project,
        members,
        milestones,
        boards,
        users,
        errors,
    },
} ) => ( {
    project,
    members,
    milestones,
    boards,
    users,
    errors,
} );

const mDTP = dispatch => ( {
    Load: args => dispatch( actions.load( args ) ),
    EditProject: payload => dispatch( actions.editProject( payload ) ),
    ArchiveProject: payload => dispatch( actions.archiveProject( payload ) ),
    AddMember: payload => dispatch( actions.addMember( payload ) ),
    RemoveMember: payload => dispatch( actions.removeMember( payload ) ),
    AddMilestone: payload => dispatch( actions.addMilestone( payload ) ),
    RemoveMilestone: payload => dispatch( actions.removeMilestone( payload ) ),
    CreateBoard: payload => dispatch( actions.createBoard( payload ) ),
    EditBoard: payload => dispatch( actions.editBoard( payload ) ),
    ArchiveBoard: payload => dispatch( actions.archiveBoard( payload ) ),
} );

export default connect( mSTP, mDTP )( PageProject );
