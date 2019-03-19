import React from "react";
import { bool } from "prop-types";

const Loading = ( { isActive } ) => (
    <div className={ `pageloader ${ isActive ? "is-active" : "" }` }>
        <span className="title">Loading</span>
    </div>
);

Loading.propTypes = {
    isActive: bool.isRequired,
};

export default Loading;
