import React from "react";
import {
    func, shape, string, arrayOf,
} from "prop-types";
import { connect } from "react-redux";
import { actions } from "./duck";

class Board extends React.Component {
    static defaultProps = {
        columns: [],
    };

    static propTypes = {
        columns: arrayOf( shape( { id: string, name: string } ) ),
        GetColumns: func.isRequired,
        match: shape( {} ).isRequired,
    };

    componentDidMount() {
        const { GetColumns } = this.props;
        const { match } = this.props;
        GetColumns( match.params.boardId );
    }

    render() {
        const { columns } = this.props;
        const columnItems = columns.map( c => (
            <h2>{c.name}</h2>
        ) );
        return (
            <div>
                Board
                <div>
                    {columnItems}
                </div>
            </div>
        );
    }
}

const mSTP = ( { board: { columns, boardId } } ) => ( { columns, boardId } );

const mDTP = dispatch => ( {
    GetBoard: args => dispatch( actions.getBoard( args ) ),
} );

export default connect( mSTP, mDTP )( Board );
