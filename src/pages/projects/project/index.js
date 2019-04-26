/* eslint-disable complexity */
import React from "react";
import {
    func, shape, string, arrayOf, bool,
} from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    Modal, Form, FormField, BoardItem, SubmitButton, Search,
} from "components";
import { actions } from "./duck";

class Project extends React.Component {
    static defaultProps = {
        boards: [],
        projectId: "",
        project: {},
        allMembers: [],
    };

    static propTypes = {
        match: shape( {} ).isRequired,
        boards: arrayOf( shape( { id: string, name: string, archived: bool } ) ),
        project: shape( {} ),
        allMembers: arrayOf( shape( {} ) ),
        GetBoards: func.isRequired,
        GetProject: func.isRequired,
        DeleteBoard: func.isRequired,
        projectId: string,
        ArchiveProject: func.isRequired,
        ArchiveBoard: func.isRequired,
        UpdateBoard: func.isRequired,
        isArchived: bool.isRequired,
        RemoveMember: func.isRequired,
        AddMember: func.isRequired,
        GetAllMembers: func.isRequired,
    };

    constructor( props ) {
        super( props );

        this.state = {
            searchBoardName: "",
            showArchived: false,
        };
    }

    componentDidMount() {
        const {
            GetBoards, GetProject, GetAllMembers, match,
        } = this.props;
        GetBoards( match.params.id );
        GetProject( match.params.id );
        GetAllMembers( "" );
    }

    toggleShowArchived = () => {
        this.setState( prevState => ( { showArchived: !prevState.showArchived } ) );
    }

    render() {
        const {
            match, boards, DeleteBoard, UpdateBoard, ArchiveProject, ArchiveBoard, RemoveMember, projectId, isArchived, project, allMembers, AddMember,
        } = this.props;

        const { searchBoardName, showArchived } = this.state;

        if ( isArchived ) {
            return <Redirect to="/projects" />;
        }

        if ( project === null ) {
            return <div>Loading</div>;
        }

        let filteredBoards = boards.filter( b => b.name.toLowerCase().startsWith( searchBoardName.toLowerCase() ) );
        if ( !showArchived ) {
            filteredBoards = filteredBoards.filter( b => !b.archived );
        }
        const boardItems = filteredBoards.map( b => (
            <BoardItem key={ b.id } projectId={ projectId } boardId={ b.id } archived={ b.archived } name={ b.name } onUpdate={ UpdateBoard } onArchive={ ArchiveBoard } onDelete={ DeleteBoard } />
        ) );

        let members = [];
        if ( project.members.length === 0 ) {
            project.members.push( { key: 1, firstname: "This project has no members", lastname: "" } );
        }
        members = project.members.map( item => (
            <div className="list-item" key={ item.id }>
                { `${ item.firstname } ${ item.lastname }` }
                <button className="button is-small is-pulled-right is-danger" type="button" onClick={ () => RemoveMember( { projectid: match.params.id, memberid: item.id } ) }>-</button>
            </div>
        ) );

        let milestones = [];
        if ( project.milestones.length === 0 ) {
            project.milestones[ 0 ] = { id: "yeet", name: "This project has no milestones" };
        }
        milestones = project.milestones.map( item => (
            <div className="list-item" key={ item.id }>
                { item.name }
            </div>
        ) );

        let allMembersList = allMembers.map( item => (
            <div className="list-item" key={ item.id }>
                { `${ item.firstname } ${ item.lastname }` }
                <button className="button is-small is-pulled-right is-success" type="button" onClick={ () => AddMember( { projectid: match.params.id, memberid: item.id } ) }>+</button>
            </div>
        ) );

        // eslint-disable-next-line no-restricted-syntax
        const newAllMembersList = [];
        const checkMemberList = [];
        project.members.map( item => checkMemberList.push( item.id ) );
        allMembersList.map( ( item ) => {
            if ( !checkMemberList.includes( item.key ) ) {
                return newAllMembersList.push( item );
            }
            return null;
        } );
        allMembersList = newAllMembersList;

        project.start = new Date( project.start ).toString();
        project.updatedAt = new Date( project.updatedAt ).toString();

        if ( project != null ) {
            return (
                <div className="container">

                    <h1>
                        {project.name}
                        {" "}
                        <button className="button is-danger" type="button" onClick={ () => ArchiveProject( projectId ) }>
                            Archive
                        </button>

                    </h1>
                    <div className="columns">
                        <div className="column is-one-third">
                            <div>
                                <b>
                                Description:
                                    {" "}
                                </b>
                                <p>{project.description}</p>
                                <b>
                                Owner:
                                    {" "}
                                </b>
                                <p>{`${ project.owner.firstname } ${ project.owner.lastname }`}</p>
                                <b>
                                Client:
                                    {" "}
                                </b>
                                <p>{project.client.name}</p>
                            </div>
                        </div>
                        <div className="column is-half">
                            <b>
                                Start date:
                                {" "}
                            </b>
                            <p>{ project.start }</p>
                            <b>
                                Last updated at:
                                {" "}
                            </b>
                            <p>{ project.updatedAt }</p>
                        </div>
                    </div>

                    <hr />

                    <div className="columns">
                        <div className="column is-one-third">

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
                                            onSubmit={ actions.AddMember }
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
                        </div>

                        <div className="column is-one-third">
                            <div className="box">
                                <b>Milestones</b>
                                <hr />
                                <div className="list">
                                    { milestones }
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="level">
                        <Modal
                            title="Create"
                            description="Create a board for this project."
                            body={ (
                                <Form
                                    form="createBoardForm"
                                    onSubmit={ actions.createBoard }
                                >
                                    <FormField name="name" type="text" label="Name" placeholder="Sprint 1" />
                                </Form>
                            ) }
                            footer={
                                <SubmitButton form="createBoardForm">Create</SubmitButton>
                            }
                            enableCancelButton
                        />
                    </div>
                    <div className="boards-filter">
                        <Search
                            onSearch={ ( name ) => {
                                this.setState( { searchBoardName: name } );
                            } }
                            placeholder="Boardname"
                        />
                        {/* <Form>

                            type="checkbox"
                            name="archived"
                            label="Show archived"
                            checked={ showArchived }
                            onClick={ this.toggleShowArchived }
                        />
                    </Form> */}
                    </div>
                    <ul className="boards-list">
                        {boardItems}
                    </ul>
                </div>
            );
        }
        return (
            <h1>loading page</h1>
        );
    }
}

const mSTP = ( {
    project: {
        boards, projectId, isArchived, project, allMembers,
    },

} ) => ( {
    boards, projectId, isArchived, project, allMembers,
} );

const mDTP = dispatch => ( {
    GetProject: args => dispatch( actions.getProject( args ) ),
    GetBoards: args => dispatch( actions.getBoards( args ) ),
    DeleteBoard: args => dispatch( actions.deleteBoard( args ) ),
    UpdateBoard: args => dispatch( actions.updateBoard( args ) ),
    ArchiveBoard: args => dispatch( actions.archiveBoard( args ) ),
    ArchiveProject: args => dispatch( actions.archiveProject( args ) ),
    RemoveMember: args => dispatch( actions.removeMember( args ) ),
    AddMember: args => dispatch( actions.addMember( args ) ),
    GetAllMembers: args => dispatch( actions.getAllMembers( args ) ),
} );

export default connect( mSTP, mDTP )( Project );
