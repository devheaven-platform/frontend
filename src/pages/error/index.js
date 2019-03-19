import React from "react";
import {
    number,
    string,
    bool,
    shape,
} from "prop-types";

const Error = ( {
    code,
    title,
    message,
    enableBackButton,
    history,
} ) => (
    <div className="error-container">
        <div className="has-text-centered">
            <h1 className="title">{ code }</h1>
            <h4 className="subtitle">{ title }</h4>
            <p className="text-muted multiline">
                { message }
            </p>
            { enableBackButton && <button type="button" color="secondary" size="sm" onClick={ () => history.goBack() }>Go Back</button> }
        </div>
    </div>
);

Error.defaultProps = {
    enableBackButton: false,
    history: {},
};

Error.propTypes = {
    code: number.isRequired,
    title: string.isRequired,
    message: string.isRequired,
    enableBackButton: bool,
    history: shape( {} ),
};

export default Error;
