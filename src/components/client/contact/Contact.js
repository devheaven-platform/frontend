import React from "react";
import PropTypes from "prop-types";

const ClientContact = ( { contact } ) => (
    <div className="column">
        <h5 className="title is-5">Contact</h5>
        <div className="columns">
            <div className="column">
                <div className="has-margin-bottom-3">
                    <p><b>Firstname</b></p>
                    <p>{ contact.firstname }</p>
                </div>
                <div className="has-margin-bottom-3">
                    <p><b>Email</b></p>
                    <p>{ contact.email }</p>
                </div>
            </div>
            <div className="column">
                <div className="has-margin-bottom-3">
                    <p><b>Lastname</b></p>
                    <p>
                        { contact.lastname }
                    </p>
                </div>
                <div className="has-margin-bottom-3">
                    <p><b>Phone Number</b></p>
                    <p>
                        { contact.phoneNumber || "No phone number set" }
                    </p>
                </div>
            </div>
        </div>
    </div>
);

ClientContact.propTypes = {
    contact: PropTypes.shape().isRequired,
};

export default ClientContact;
