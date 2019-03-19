import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Imported routes
import {
    Home,
    Error,
} from "pages";

const Router = ( { children, ...rest } ) => (
    <BrowserRouter>
        <React.Fragment>
            { children }
            <Switch>
                <Route exact path="/" { ...rest } component={ Home } />
                <Route
                    { ...rest }
                    path="*"
                    component={ props => (
                        <Error
                            code={ 404 }
                            title="We couldn't find the page"
                            message={ "Sorry, but the page you are looking for was either not found or does not exist.\nTry refreshing the page or click the button below to go back to the Homepage." }
                            enableBackButton
                            { ...rest }
                            { ...props }
                        />
                    ) }
                />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

Router.propTypes = {
    children: PropTypes.node,
    isAuthenticated: PropTypes.bool,
};

Router.defaultProps = {
    isAuthenticated: false,
    children: null,
};

export default Router;
