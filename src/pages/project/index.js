import React from "react";
import {
    func, shape, string, arrayOf,
} from "prop-types";
import { connect } from "react-redux";
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
        boards: arrayOf( shape( { id: string, name: string } ) ),
        getBoards: func.isRequired,
        projectId: string,
    };

    componentDidMount() {
        const { getBoards } = this.props;
        const { id } = this.props.match.params;
        getBoards( id );
    }

    render() {
        const { boards } = this.props;
        const boardItems = boards.map( b => (
            <BoardItem key={ b.id } name={ b.name } />
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
            </div>
        );
    }
}

const mSTP = ( { project: { boards, projectId } } ) => ( { boards, projectId } );

const mDTP = dispatch => ( {
    getBoards: args => dispatch( actions.getBoards( args ) ),
} );

export default connect( mSTP, mDTP )( Project );
