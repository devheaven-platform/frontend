import React from "react";
import {
    func, shape,
} from "prop-types";
import { connect } from "react-redux";
import { Board as KanbanBoard } from "react-trello";
import { actions } from "./duck";

class Board extends React.Component {
    static defaultProps = {
        board: null,
    };

    static propTypes = {
        board: shape( {} ),
        GetBoard: func.isRequired,
        match: shape( {} ).isRequired,
    };

    componentDidMount() {
        const { GetBoard, match } = this.props;
        GetBoard( match.params.boardId );
    }

    render() {
        const { board } = this.props;
        const data = { lanes: [] };
        if ( board ) {
            board.columns.map( ( column ) => {
                const { id, name } = column;
                const cards = [ ];
                if ( column.tasks.length > 0 ) {
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
            <KanbanBoard data={ data } draggable editable />
        );
    }
}

const mSTP = ( { board: { board, boardId } } ) => ( { board, boardId } );

const mDTP = dispatch => ( {
    GetBoard: args => dispatch( actions.getBoard( args ) ),
} );

export default connect( mSTP, mDTP )( Board );
