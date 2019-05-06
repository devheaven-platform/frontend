import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { Page } from "components";

const PageError = ( {
    code,
    title,
    message,
    history,
    color,
    background,
    hasBackButton,
} ) => (
    <Page background={ background }>
        <Page.Content isCentered>
            <div className={ classNames( "column is-4-fullhd is-7-tablet is-10-mobile has-text-centered", ` has-text-${ color }` ) }>
                <h1 className={ `title has-text-${ color }` }>{ code }</h1>
                <h4 className={ `subtitle has-text-${ color }` }>{ title }</h4>
                <p className="has-text-multiline">
                    { message }
                </p>
                { hasBackButton && <button type="button" className="button is-primary has-margin-top-3" onClick={ () => history.goBack() }>Go Back</button>}
            </div>
        </Page.Content>
    </Page>
);

PageError.propTypes = {
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    history: PropTypes.shape(),
    color: PropTypes.string,
    background: PropTypes.string,
    hasBackButton: PropTypes.bool,
};

PageError.defaultProps = {
    history: {},
    color: "dark",
    background: "white",
    hasBackButton: false,
};

export default PageError;
