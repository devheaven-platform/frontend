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
    };

    static propTypes = {
        match: shape( {} ).isRequired,
        boards: arrayOf( shape( { id: string, name: string, archived: bool } ) ),
        project: shape( {} ),
        GetBoards: func.isRequired,
        GetProject: func.isRequired,
        DeleteBoard: func.isRequired,
        projectId: string,
        ArchiveProject: func.isRequired,
        ArchiveBoard: func.isRequired,
        UpdateBoard: func.isRequired,
        isArchived: bool.isRequired,
    };

    constructor( props ) {
        super( props );

        this.state = {
            searchBoardName: "",
            showArchived: false,
        };
    }

    componentDidMount() {
        const { GetBoards, GetProject, match } = this.props;
        GetBoards( match.params.id );
        GetProject( match.params.id );
    }

    toggleShowArchived = () => {
        this.setState( prevState => ( { showArchived: !prevState.showArchived } ) );
    }

    render() {
        const {
            boards, DeleteBoard, UpdateBoard, ArchiveProject, ArchiveBoard, projectId, isArchived, project,
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

        const members = project.members.map( item => <li key={ item.id }>{ `${ item.firstname } ${ item.lastname }`}</li> );
        const milestones = project.milestones.map( item => <li key={ item.id }>{ item.name }</li> );

        console.log( project );
        if ( project != null ) {
            return (
                <div className="container">
                    <div className="row">
                        <h1>
                            {project.name}
                            {" "}
                            <button className="button is-danger" type="button" onClick={ () => ArchiveProject( projectId ) }>
                            Archive
                            </button>

                        </h1>
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

                    <div className="columns">
                        <div className="column is-one-third is-multiline">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                Members
                                    </p>
                                </header>
                                <div className="card-content ">
                                    <div className="content " />
                                    <ul>
                                        { members }
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="column is-one-third" align="right">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        Milestones
                                    </p>
                                </header>
                                <div className="card-content">
                                    <div className="content" />
                                    <ul>
                                        { milestones }
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <br />

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
        boards, projectId, isArchived, project,
    },
} ) => ( {
    boards, projectId, isArchived, project,
} );

const mDTP = dispatch => ( {
    GetProject: args => dispatch( actions.getProject( args ) ),
    GetBoards: args => dispatch( actions.getBoards( args ) ),
    DeleteBoard: args => dispatch( actions.deleteBoard( args ) ),
    UpdateBoard: args => dispatch( actions.updateBoard( args ) ),
    ArchiveBoard: args => dispatch( actions.archiveBoard( args ) ),
    ArchiveProject: args => dispatch( actions.archiveProject( args ) ),
} );

export default connect( mSTP, mDTP )( Project );
