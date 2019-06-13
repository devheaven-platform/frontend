import React from "react";
import PropTypes from "prop-types";

const PageHeader = ( { title, subtitle, children } ) => (
    <div className="page-header">
        <div className="page-header-left">
            <div>
                <h1 className="title">{title}</h1>
                { subtitle && <h2 className="subtitle">{ subtitle }</h2> }
            </div>
        </div>
        <div className="page-header-right">
            { children }
        </div>
    </div>
);

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.node,
};

PageHeader.defaultProps = {
    subtitle: null,
    children: null,
};

export default PageHeader;
