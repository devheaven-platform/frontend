import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Router from "./router";
import { actions } from "./duck";

class App extends React.Component {
    componentDidMount() {
        const { Init } = this.props;
        Init();
    }

    render() {
        const { isAuthenticated } = this.props;
        return (
            <div>
                <Router isAuthenticated={ isAuthenticated } />
            </div>
        );
    }
}

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    Init: PropTypes.func.isRequired,
};

const mSTP = ( { app: { isAuthenticated } } ) => ( { isAuthenticated } );

const mDTP = dispatch => ( {
    Init: args => dispatch( actions.init( args ) ),
} );

export default connect( mSTP, mDTP )( App );
