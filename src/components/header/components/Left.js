import React from "react";
import { func } from "prop-types";

const HeaderLeft = ( { toggleSidebar } ) => (
    <div className="navbar-start">
        <div className="navbar-item">
            <button type="button" className="button is-light" onClick={ toggleSidebar }>
                <i className="fas fa-bars" />
            </button>
        </div>
    </div>
);

HeaderLeft.propTypes = {
    toggleSidebar: func.isRequired,
};

export default HeaderLeft;
