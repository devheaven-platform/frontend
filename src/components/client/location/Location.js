import React from "react";
import PropTypes from "prop-types";

const ClientLocation = ( { location } ) => {
    if ( location ) {
        return (
            <div className="column">
                <h5 className="title is-5">Location</h5>
            </div>
        );
    }
    return (
        <div className="column">
            <h5 className="title is-5">Location</h5>
            <p className="has-text-centered has-text-weight-bold">No Location Set</p>
        </div>
    );
};

ClientLocation.propTypes = {
    location: PropTypes.string,
};

ClientLocation.defaultProps = {
    location: null,
};

export default ClientLocation;
