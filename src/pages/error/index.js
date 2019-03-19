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
    enablePrimaryBg,
    enableBackButton,
    history,
} ) => {
    if ( enablePrimaryBg ) {
        return (
            <div className="error-container has-background-primary">
                <div className="has-text-centered">
                    <h1 className="title has-text-white">{ code }</h1>
                    <h4 className="subtitle has-text-white">{ title }</h4>
                    <p className="has-text-white multiline">
                        { message }
                    </p>
                    { enableBackButton && <button type="button" className="button is-white is-margin-top-3" onClick={ () => history.goBack() }>Go Back</button> }
                </div>
            </div>
        );
    }
    return (
        <div className="error-container">
            <div className="has-text-centered">
                <h1 className="title">{ code }</h1>
                <h4 className="subtitle">{ title }</h4>
                <p className="multiline">
                    { message }
                </p>
                { enableBackButton && <button type="button" className="button is-primary is-margin-top-3" onClick={ () => history.goBack() }>Go Back</button> }
            </div>
        </div>
    );
};

Error.defaultProps = {
    enablePrimaryBg: false,
    enableBackButton: false,
    history: {},
};

Error.propTypes = {
    code: number.isRequired,
    title: string.isRequired,
    message: string.isRequired,
    enablePrimaryBg: bool,
    enableBackButton: bool,
    history: shape( {} ),
};

export default Error;
