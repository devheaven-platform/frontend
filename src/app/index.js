import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Header, Sidebar, ErrorHandler } from "components";
import { Loading, Error } from "pages";
import Router from "./router";
import { actions } from "./duck";

class App extends React.Component {
    componentDidMount() {
        const { Init } = this.props;
        Init();
    }

    render() {
        const { isAuthenticated, isCollapsed, isConnected } = this.props;

        if ( isConnected === false ) {
            return (
                <Error
                    code={ 503 }
                    title="Could not connect to the service"
                    message="Sorry, but the service is currently unavailable. Please try again later."
                    enableFullSize
                />
            );
        }

        return (
            <div>
                <Router isAuthenticated={ isAuthenticated } isCollapsed={ isCollapsed }>
                    <Header />
                    <Sidebar />
                    <ErrorHandler />
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
    isCollapsed: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    Init: PropTypes.func.isRequired,
};

const mSTP = ( { app: { isConnected, isAuthenticated, isCollapsed } } ) => ( { isConnected, isAuthenticated, isCollapsed } );

const mDTP = dispatch => ( {
    Init: args => dispatch( actions.init( args ) ),
} );

export default connect( mSTP, mDTP )( App );
