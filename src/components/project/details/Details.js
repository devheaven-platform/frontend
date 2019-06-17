import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const ProjectDetails = ( {
    client,
    owner,
    start,
    pricePerPoint,
    identifier,
    invoiceMargin,
} ) => (
    <React.Fragment>
        <div className="column">
            <div className="has-margin-bottom-3">
                <p><b>Client</b></p>
                <p>{ client.name }</p>
            </div>
            <div className="has-margin-bottom-3">
                <p><b>Owner</b></p>
                <p>{ `${ owner.firstname } ${ owner.lastname }` }</p>
            </div>
            <div>
                <p><b>Invoicing Type</b></p>
                <p>
                    { identifier }
                </p>
            </div>
        </div>
        <div className="column">
            <div className="has-margin-bottom-3">
                <p><b>Start Date</b></p>
                <p>
                    { moment( start ).format( "DD-MM-YYYY" ) }
                </p>
            </div>
            <div className="has-margin-bottom-3">
                <p><b>Profit Margin (%)</b></p>
                <p>
                    { invoiceMargin }
                </p>
            </div>
            <div>
                <p><b>Invoicing Value (€)</b></p>
                <p>
                    { pricePerPoint }
                </p>
            </div>
        </div>
    </React.Fragment>
);

ProjectDetails.propTypes = {
    client: PropTypes.shape().isRequired,
    owner: PropTypes.shape().isRequired,
    start: PropTypes.number.isRequired,
    pricePerPoint: PropTypes.number.isRequired,
    identifier: PropTypes.string.isRequired,
    invoiceMargin: PropTypes.number.isRequired,
};

export default ProjectDetails;
