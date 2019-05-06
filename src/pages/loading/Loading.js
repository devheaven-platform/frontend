import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { Page } from "components";

const PageLoading = ( { isActive, isFullSize } ) => {
    if ( isFullSize ) {
        return (
            <div className={ classNames( "pageloader", { "is-active": isActive } ) }>
                <span className="title">Loading</span>
            </div>
        );
    }
    return (
        <Page>
            <Page.Content isCentered>
                <div className="loader">
                    <div className="figure" />
                    <span className="title">Loading</span>
                </div>
            </Page.Content>
        </Page>
    );
};

PageLoading.propTypes = {
    isActive: PropTypes.bool,
    isFullSize: PropTypes.bool,
};

PageLoading.defaultProps = {
    isActive: true,
    isFullSize: false,
};

export default PageLoading;
