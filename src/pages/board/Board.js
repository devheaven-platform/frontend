import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import createColumnForm from "forms/CreateColumn";
import editBoardForm from "forms/EditBoard";
import { Page, ModalForm, Board } from "components";
import { PageLoading } from "pages";
import { actions } from "./duck";

class PageBoard extends React.Component {
    static propTypes = {
        board: PropTypes.shape(),
        columns: PropTypes.arrayOf( PropTypes.shape() ),
        errors: PropTypes.shape(),
        match: PropTypes.shape().isRequired,
        Load: PropTypes.func.isRequired,
        EditBoard: PropTypes.func.isRequired,
        CreateColumn: PropTypes.func.isRequired,
        EditColumn: PropTypes.func.isRequired,
        RemoveColumn: PropTypes.func.isRequired,
        CreateTask: PropTypes.func.isRequired,
        EditTask: PropTypes.func.isRequired,
        RemoveTask: PropTypes.func.isRequired,
    }

    static defaultProps = {
        board: null,
        columns: null,
        errors: {},
    }

    componentDidMount() {
        const { Load, match } = this.props;
        Load( match.params.id );
    }

    render() {
        const {
            board,
            columns,
            errors,
            EditBoard,
            CreateColumn,
            EditColumn,
            RemoveColumn,
            CreateTask,
            EditTask,
            RemoveTask,
        } = this.props;

        if ( board === null || columns === null ) {
            return <PageLoading />;
        }

        return (
            <Page>
                <Page.Header title={ board.name } subtitle={ `Status: ${ board.status }` }>
                    <ModalForm
                        title="Edit"
                        description="Edit this board."
                        fields={ editBoardForm( board ) }
                        errors={ errors }
                        submit={ EditBoard }
                    />
                    <ModalForm
                        title="Create Column"
                        description="Create a new column."
                        button={ ( { onClick } ) => (
                            <button
                                type="button"
                                className="button is-secondary has-margin-left-2"
                                onClick={ onClick }
                            >
                                Create Column
                            </button>
                        ) }
                        fields={ createColumnForm }
                        errors={ errors }
                        submit={ CreateColumn }
                    />
                </Page.Header>
                <Page.Content>
                    <Board
                        id={ board.id }
                        columns={ columns }
                        errors={ errors }
                        editBoard={ EditBoard }
                        editColumn={ EditColumn }
                        removeColumn={ RemoveColumn }
                        createTask={ CreateTask }
                        editTask={ EditTask }
                        removeTask={ RemoveTask }
                    />
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

const mSTP = ( { board: { board, columns, errors } } ) => ( { board, columns, errors } );

const mDTP = dispatch => ( {
    Load: args => dispatch( actions.load( args ) ),
    EditBoard: payload => dispatch( actions.editBoard( payload ) ),
    CreateColumn: payload => dispatch( actions.createColumn( payload ) ),
    EditColumn: payload => dispatch( actions.editColumn( payload ) ),
    RemoveColumn: payload => dispatch( actions.removeColumn( payload ) ),
    CreateTask: payload => dispatch( actions.createTask( payload ) ),
    EditTask: payload => dispatch( actions.editTask( payload ) ),
    RemoveTask: payload => dispatch( actions.removeTask( payload ) ),
} );

export default connect( mSTP, mDTP )( PageBoard );
