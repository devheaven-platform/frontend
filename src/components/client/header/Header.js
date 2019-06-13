import React from "react";
import PropTypes from "prop-types";

const ClientHeader = ( { client, children } ) => (
    <div className="page-header">
        <div className="page-header-left">
            <img className="is-rounded has-margin-right-3" width="64" height="64" src={ client.logo } alt="logo" />
            <div>
                <h1 className="title">{ client.name }</h1>
                <h2 className="subtitle">{ client.description }</h2>
            </div>
        </div>
        <div className="page-header-right">
            { children }
        </div>
    </div>
);

ClientHeader.propTypes = {
    client: PropTypes.shape().isRequired,
    children: PropTypes.node,
};

ClientHeader.defaultProps = {
    children: null,
};

export default ClientHeader;
