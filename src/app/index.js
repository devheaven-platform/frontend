import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Header } from "components";
import { Loading, Error } from "pages";
import Router from "./router";
import { actions } from "./duck";

class App extends React.Component {
    componentDidMount() {
        const { Init } = this.props;
        Init();
    }

    render() {
        const { isAuthenticated, isConnected } = this.props;

        if ( isConnected === false ) {
            return (
                <Error
                    code={ 503 }
                    title="Could not connect to the service"
                    message="Sorry, but the service is currently unavailable. Please try again later."
                    enablePrimaryBg
                />
            );
        }

        return (
            <div>
                <Router isAuthenticated={ isAuthenticated }>
                    <Header />
                    <Loading isActive={ isConnected === null } />
                </Router>
            </div>
        );
    }
}

App.defaultProps = {
    isConnected: false,
};

App.propTypes = {
    isConnected: PropTypes.bool,
    isAuthenticated: PropTypes.bool.isRequired,
    Init: PropTypes.func.isRequired,
};

const mSTP = ( { app: { isConnected, isAuthenticated } } ) => ( { isConnected, isAuthenticated } );

const mDTP = dispatch => ( {
    Init: args => dispatch( actions.init( args ) ),
} );

export default connect( mSTP, mDTP )( App );
