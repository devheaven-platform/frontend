import React from "react";
import {
    func, shape, string, arrayOf, bool,
} from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    Modal, Form, FormField, BoardItem, SubmitButton,
} from "components";
import { actions } from "./duck";

class Project extends React.Component {
    static defaultProps = {
        boards: [],
        projectId: "",
    };

    static propTypes = {
        match: shape( {} ).isRequired,
        boards: arrayOf( shape( { id: string, name: string, archived: bool } ) ),
        GetBoards: func.isRequired,
        DeleteBoard: func.isRequired,
        projectId: string,
        ArchiveProject: func.isRequired,
        ArchiveBoard: func.isRequired,
        UpdateBoard: func.isRequired,
        isArchived: bool.isRequired,
    };

    componentDidMount() {
        const { GetBoards, match } = this.props;
        GetBoards( match.params.id );
    }

    render() {
        const {
            boards, DeleteBoard, UpdateBoard, ArchiveProject, ArchiveBoard, projectId, isArchived,
        } = this.props;
        if ( isArchived ) {
            return <Redirect to="/projects" />;
        }
        const boardItems = boards.map( b => (
            <BoardItem key={ b.id } id={ b.id } name={ b.name } onUpdate={ UpdateBoard } onArchive={ ArchiveBoard } onDelete={ DeleteBoard } />
        ) );
        return (
            <div className="container">
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
                <ul>
                    {boardItems}
                </ul>
                <button className="button is-danger" type="button" onClick={ () => ArchiveProject( projectId ) }>
                    Archive
                </button>
            </div>
        );
    }
}

const mSTP = ( {
    project: {
        boards, projectId, isArchived,
    },
} ) => ( {
    boards, projectId, isArchived,
} );

const mDTP = dispatch => ( {
    GetBoards: args => dispatch( actions.getBoards( args ) ),
    DeleteBoard: args => dispatch( actions.deleteBoard( args ) ),
    UpdateBoard: args => dispatch( actions.updateBoard( args ) ),
    ArchiveBoard: args => dispatch( actions.archiveBoard( args ) ),
    ArchiveProject: args => dispatch( actions.archiveProject( args ) ),
} );

export default connect( mSTP, mDTP )( Project );
