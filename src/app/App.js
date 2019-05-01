import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "@fortawesome/fontawesome-free/css/all.css";
import "react-notifications/lib/notifications.css";
import "../assets/scss/style.scss";

import Router from "router/Router";

import { PageError, PageLoading } from "pages";
import { Navbar, Sidebar, ErrorHandler } from "components";
import { actions } from "./duck";

class App extends React.Component {
    componentDidMount() {
        const { Init } = this.props;
        Init();
    }

    render() {
        const { isConnected, isAuthenticated, roles } = this.props;

        if ( isConnected === false ) {
            return (
                <div className="app">
                    <PageError
                        code={ 503 }
                        title="Could not connect to the service"
                        message="Sorry, but the service is currently unavailable. Please try again later."
                        color="white"
                        background="primary"
                    />
                </div>
            );
        }

        return (
            <div className="app">
                <Router isAuthenticated={ isAuthenticated } roles={ roles }>
                    <Navbar />
                    <Sidebar hasToggle />
                    <ErrorHandler />
                    <PageLoading isActive={ isConnected === null } isFullSize />
                </Router>
            </div>
        );
    }
}

App.defaultProps = {
    isConnected: null,
};

App.propTypes = {
    isConnected: PropTypes.bool,
    isAuthenticated: PropTypes.bool.isRequired,
    roles: PropTypes.arrayOf( PropTypes.string ).isRequired,
    Init: PropTypes.func.isRequired,
};

const mSTP = ( { app: { isConnected, isAuthenticated, roles } } ) => ( { isConnected, isAuthenticated, roles } );

const mDTP = dispatch => ( {
    Init: args => dispatch( actions.init( args ) ),
} );

export default connect( mSTP, mDTP )( App );
