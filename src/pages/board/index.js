import React from "react";
import {
    func, shape,
} from "prop-types";
import { connect } from "react-redux";
// eslint-disable-next-line import/no-unresolved
import { Board as KanbanBoard } from "react-trello";
import { actions } from "./duck";

class Board extends React.Component {
    static defaultProps = {
        board: null,
    };

    static propTypes = {
        board: shape( {} ),
        match: shape( {} ).isRequired,
        GetBoard: func.isRequired,
        CreateColumn: func.isRequired,
        CreateTask: func.isRequired,
        DeleteTask: func.isRequired,
    };

    componentDidMount() {
        const { GetBoard, match } = this.props;
        GetBoard( match.params.boardId );
    }

    render() {
        const {
            CreateColumn, CreateTask, DeleteTask, board, match,
        } = this.props;
        const data = { lanes: [] };
        if ( board && board.columns ) {
            board.columns.map( ( column ) => {
                const { id, name } = column;
                const cards = [ ];
                if ( column.tasks && column.tasks.length > 0 ) {
                    column.tasks.map( ( task ) => {
                        cards.push( {
                            key: task.id, id: task.id, title: task.name, description: task.description,
                        } );
                        return task;
                    } );
                }
                data.lanes.push( { id, title: name, cards } );
                return column;
            } );
        }

        return (
            <KanbanBoard
                data={ data }
                style={ { backgroundColor: "transparent" } }
                canAddLanes
                draggable
                editable
                onCardAdd={ ( args, laneId ) => CreateTask( { name: args.title, column: laneId, description: args.description } ) }
                onLaneAdd={ args => CreateColumn( { board: match.params.boardId, name: args.title } ) }
                onCardDelete={ cardId => DeleteTask( cardId ) }
            />
        );
    }
}

const mSTP = ( { board: { board, boardId } } ) => ( { board, boardId } );

const mDTP = dispatch => ( {
    GetBoard: args => dispatch( actions.getBoard( args ) ),
    CreateColumn: args => dispatch( actions.createColumn( args ) ),
    CreateTask: args => dispatch( actions.createTask( args ) ),
    DeleteTask: args => dispatch( actions.deleteTask( args ) ),
} );

export default connect( mSTP, mDTP )( Board );
