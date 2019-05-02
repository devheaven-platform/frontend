import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const ProjectDetails = ( {
    client,
    owner,
    start,
    updatedAt,
} ) => (
    <React.Fragment>
        <div className="column">
            <div className="has-margin-bottom-3">
                <p><b>Client</b></p>
                <p>{ client.name }</p>
            </div>
            <div>
                <p><b>Owner</b></p>
                <p>{ `${ owner.firstname } ${ owner.lastname }` }</p>
            </div>
        </div>
        <div className="column">
            <div className="has-margin-bottom-3">
                <p><b>Start Date</b></p>
                <p>
                    { moment( start ).format( "DD-MM-YYYY" ) }
                </p>
            </div>
            <div>
                <p><b>Updated At</b></p>
                <p>
                    { moment( updatedAt ).format( "DD-MM-YYYY" ) }
                </p>
            </div>
        </div>
    </React.Fragment>
);

ProjectDetails.propTypes = {
    client: PropTypes.shape().isRequired,
    owner: PropTypes.shape().isRequired,
    start: PropTypes.number.isRequired,
    updatedAt: PropTypes.number.isRequired,
};

export default ProjectDetails;
