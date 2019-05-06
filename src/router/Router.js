import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ROLES from "./Roles";

import {
    PageHome,
    PageProjects,
    PageProject,
    PageBoard,
    PageLogin,
    PageError,
} from "../pages";
import RestrictedRoute from "./RestrictedRoute";

const Router = ( { isAuthenticated, roles, children } ) => (
    <BrowserRouter>
        <React.Fragment>
            { children }
            <Switch>
                <RestrictedRoute exact path="/" isAuthenticated={ isAuthenticated } roles={ roles } allowed={ [ ROLES.USER ] } component={ PageHome } />
                <RestrictedRoute exact path="/projects" isAuthenticated={ isAuthenticated } roles={ roles } allowed={ [ ROLES.USER ] } component={ PageProjects } />
                <RestrictedRoute exact path="/projects/:id" isAuthenticated={ isAuthenticated } roles={ roles } allowed={ [ ROLES.USER ] } component={ PageProject } />
                <RestrictedRoute exact path="/boards/:id" isAuthenticated={ isAuthenticated } roles={ roles } allowed={ [ ROLES.USER ] } component={ PageBoard } />
                <Route exact path="/login" component={ PageLogin } />
                <Route
                    path="*"
                    component={ props => (
                        <PageError
                            code={ 404 }
                            title="Page not found"
                            message={ "Sorry, but the page you are looking for was either not found or does not exist.\nTry refreshing the page or click the button below to go back to the Homepage." }
                            hasBackButton
                            { ...props }
                        />
                    ) }
                />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

Router.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    roles: PropTypes.arrayOf( PropTypes.string ).isRequired,
    children: PropTypes.node,
};

Router.defaultProps = {
    children: null,
};

export default Router;
