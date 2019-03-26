import React from "react";
import { node } from "prop-types";

const Body = ( { body } ) => (
    body && <div className="modal-body has-margin-bottom-4">{ body }</div>
);

Body.defaultProps = {
    body: null,
};

Body.propTypes = {
    body: node,
};

export default Body;
