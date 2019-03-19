import React from "react";
import { connect } from "react-redux";
import {
    bool,
    arrayOf,
    shape,
    func,
} from "prop-types";

import { actions } from "app/duck";

const Header = ( {
    isAuthenticated,
    roles,
    LogOut,
} ) => (
    <div />
);

Header.defaultProps = {
    roles: [],
};

Header.propTypes = {
    roles: arrayOf( shape( {} ) ),
    isAuthenticated: bool.isRequired,
    LogOut: func.isRequired,
};

const mSTP = ( { app: { isAuthenticated, roles } } ) => ( { isAuthenticated, roles } );

const mDTP = dispatch => ( {
    LogOut: () => dispatch( actions.logout() ),
} );

export default connect( mSTP, mDTP )( Header );
