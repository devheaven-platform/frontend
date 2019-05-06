/* eslint complexity: 0 */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import editProjectForm from "forms/EditProject";
import createBoardForm from "forms/CreateBoard";
import boardTable from "tables/Board";
import { PageLoading } from "pages";
import {
    Page,
    ProjectDetails,
    ProjectMembers,
    ProjectMilestones,
    ModalForm,
    Table,
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
        CreateMilestone: PropTypes.func.isRequired,
        RemoveMilestone: PropTypes.func.isRequired,
        CreateBoard: PropTypes.func.isRequired,
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
        Load( match.params.id );
    }

    onContextMenuClick = ( action, board ) => {
        const { ArchiveBoard } = this.props;
        if ( action === "archive" ) {
            ArchiveBoard( board );
        }
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
            CreateMilestone,
            RemoveMilestone,
            CreateBoard,
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
                    { !project.archived && ( <button type="button" className="button is-danger has-margin-left-2" onClick={ ArchiveProject }>Archive</button> ) }
                </Page.Header>
                <Page.Content>
                    { project.archived && (
                        <div className="columns">
                            <div className="column">
                                <div className="message is-warning">
                                    <div className="message-body">
                                        Warning: This project is archived.
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) }
                    <div className="columns">
                        <ProjectDetails
                            client={ project.client }
                            owner={ project.owner }
                            start={ project.start }
                            budget={ project.budget }
                        />
                    </div>
                    <hr />
                    <div className="columns">
                        <ProjectMembers
                            members={ members }
                            users={ users }
                            errors={ errors }
                            add={ AddMember }
                            remove={ RemoveMember }
                        />
                        <ProjectMilestones
                            milestones={ milestones }
                            errors={ errors }
                            create={ CreateMilestone }
                            remove={ RemoveMilestone }
                        />
                    </div>
                    <hr />
                    <div className="columns">
                        <div className="column">
                            <div className="is-flex has-space-between has-margin-bottom-2">
                                <h5 className="title is-5">Boards</h5>
                                <ModalForm
                                    title="Create"
                                    description="Create a new board."
                                    fields={ createBoardForm }
                                    errors={ errors }
                                    submit={ CreateBoard }
                                />
                            </div>
                            <Table
                                columns={ boardTable }
                                data={ boards }
                                onContextMenuClick={ this.onContextMenuClick }
                            />
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
    CreateMilestone: payload => dispatch( actions.createMilestone( payload ) ),
    RemoveMilestone: payload => dispatch( actions.removeMilestone( payload ) ),
    CreateBoard: payload => dispatch( actions.createBoard( payload ) ),
    ArchiveBoard: payload => dispatch( actions.archiveBoard( payload ) ),
} );

export default connect( mSTP, mDTP )( PageProject );
