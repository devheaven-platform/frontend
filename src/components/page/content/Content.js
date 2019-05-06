import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const PageContent = ( { isCentered, children } ) => (
    <div className={ classNames( "page-content", { "is-centered": isCentered } ) }>
        { children }
    </div>
);

PageContent.propTypes = {
    isCentered: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

PageContent.defaultProps = {
    isCentered: false,
};

export default PageContent;
