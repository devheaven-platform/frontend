import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Imported routes
import Home from "../pages/home";

const Router = ( { children, ...rest } ) => (
    <BrowserRouter>
        <React.Fragment>
            { children }
            <Switch>
                <Route exact path="/" { ...rest } component={ props => <Home { ...rest } { ...props } /> } />
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
