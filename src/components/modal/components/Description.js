import React from "react";
import { string } from "prop-types";

const Description = ( { description } ) => (
    description && <p className="has-margin-bottom-2">{ description }</p>
);

Description.defaultProps = {
    description: null,
};

Description.propTypes = {
    description: string,
};

export default Description;
