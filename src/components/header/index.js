import React from "react";
import { connect } from "react-redux";
import {
    bool,
    func,
} from "prop-types";

import { actions } from "app/duck";
import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";

const Header = ( {
    isAuthenticated,
    LogOut,
} ) => (
    <nav className="navbar is-light is-fixed-top">
        <div className="navbar-menu">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight isAuthenticated={ isAuthenticated } logout={ LogOut } />
        </div>
    </nav>
);

Header.propTypes = {
    isAuthenticated: bool.isRequired,
    LogOut: func.isRequired,
};

const mSTP = ( { app: { isAuthenticated } } ) => ( { isAuthenticated } );

const mDTP = dispatch => ( {
    LogOut: () => dispatch( actions.logout() ),
} );

export default connect( mSTP, mDTP )( Header );
