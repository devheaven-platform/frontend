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
        id: "",
    };

    static propTypes = {
        match: shape( {} ).isRequired,
        boards: arrayOf( shape( { id: string, name: string } ) ),
        GetBoards: func.isRequired,
        DeleteBoard: func.isRequired,
        id: string,
        ArchiveProject: func.isRequired,
        isArchived: bool.isRequired,
    };

    componentDidMount() {
        const { GetBoards, match } = this.props;
        GetBoards( match.params.id );
    }

    render() {
        const {
            boards, DeleteBoard, ArchiveProject, id, isArchived,
        } = this.props;
        if ( isArchived ) {
            return <Redirect to="/projects" />;
        }
        const boardItems = boards.map( b => (
            <BoardItem key={ b.id } boardId={ b.id } name={ b.name } onDelete={ DeleteBoard } />
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
                <button className="button is-danger" type="button" onClick={ () => ArchiveProject( id ) }>
                    Archive
                </button>
            </div>
        );
    }
}

const mSTP = ( { project: { boards, id, isArchived } } ) => ( { boards, id, isArchived } );

const mDTP = dispatch => ( {
    GetBoards: args => dispatch( actions.getBoards( args ) ),
    DeleteBoard: args => dispatch( actions.deleteBoard( args ) ),
    ArchiveProject: args => dispatch( actions.archiveProject( args ) ),
} );

export default connect( mSTP, mDTP )( Project );
