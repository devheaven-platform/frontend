import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Page = ( { background, children } ) => (
    <div className={ classNames( "page", `has-background-${ background }` ) }>
        { children }
    </div>
);

Page.propTypes = {
    background: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Page.defaultProps = {
    background: "white",
};

export default Page;
