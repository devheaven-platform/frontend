import React from "react";
import { connect } from "react-redux";
import {
    bool,
    func,
} from "prop-types";

import { actions } from "app/duck";
import { HeaderLeft, HeaderCenter, HeaderRight } from "./components";

const Header = ( {
    isAuthenticated,
    ToggleSidebar,
    LogOut,
} ) => (
    <nav className="navbar is-light is-fixed-top">
        <div>
            <HeaderLeft toggleSidebar={ ToggleSidebar } />
            <HeaderCenter />
            <HeaderRight isAuthenticated={ isAuthenticated } logout={ LogOut } />
        </div>
    </nav>
);

Header.propTypes = {
    isAuthenticated: bool.isRequired,
    ToggleSidebar: func.isRequired,
    LogOut: func.isRequired,
};

const mSTP = ( { app: { isAuthenticated } } ) => ( { isAuthenticated } );

const mDTP = dispatch => ( {
    ToggleSidebar: () => dispatch( actions.toggleSidebar() ),
    LogOut: () => dispatch( actions.logout() ),
} );

export default connect( mSTP, mDTP )( Header );
