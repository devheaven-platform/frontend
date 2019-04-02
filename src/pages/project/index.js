import React from "react";

const Project = () => (
    <div>
        Project
    </div>
);

    static propTypes = {
        boards: arrayOf( shape( { id: string, name: string } ) ),
        getBoards: func.isRequired,
        deleteBoard: func.isRequired,
        projectId: string,
    };

    componentDidMount() {
        const { getBoards } = this.props;
        const { id } = this.props.match.params;
        getBoards( id );
    }

    render() {
        const { boards, deleteBoard } = this.props;
        const boardItems = boards.map( b => (
            <BoardItem key={ b.id } id={ b.id } name={ b.name } onDelete={ deleteBoard } />
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
    deleteBoard: args => dispatch( actions.deleteBoard( args ) ),
} );

export default connect( mSTP, mDTP )( Project );
