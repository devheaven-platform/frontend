import React, { Component } from "react";
import { connect } from "react-redux";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { arrayOf, string, func } from "prop-types";

import { actions } from "./duck";

class ErrorHandler extends Component {
    static propTypes = {
        errors: arrayOf( string.isRequired ).isRequired,
        Clear: func.isRequired,
    }

    componentDidUpdate() {
        const { errors, Clear } = this.props;
        if ( errors.length > 0 ) {
            errors.forEach( ( error ) => {
                NotificationManager.error( error, "Error", 15000 );
            } );
            Clear();
        }
    }

    render() {
        return <NotificationContainer />;
    }
}

const mSTP = ( { error: { errors } } ) => ( { errors } );

const mDTP = dispatch => ( {
    Clear: () => dispatch( actions.clearError() ),
} );

export default connect( mSTP, mDTP )( ErrorHandler );
