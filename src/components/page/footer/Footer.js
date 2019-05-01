import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const PageFooter = ( { background, children } ) => (
    <footer className={ classNames( "page-footer", `has-background-${ background }` ) }>
        <div className="content has-text-centered">
            { children }
        </div>
    </footer>
);

PageFooter.propTypes = {
    background: PropTypes.string,
    children: PropTypes.node.isRequired,
};

PageFooter.defaultProps = {
    background: "light",
};

export default PageFooter;
