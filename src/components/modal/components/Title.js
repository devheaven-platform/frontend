import React from "react";
import { string } from "prop-types";

const Title = ( { title } ) => (
    <h4 className="title has-margin-bottom-2">{ title }</h4>
);

Title.propTypes = {
    title: string.isRequired,
};

export default Title;
