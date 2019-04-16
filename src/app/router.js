import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Imported routes
import {
    Home,
    Projects,
    Project,
    Board,
    Invoices,
    Clients,
    Client,
    Agenda,
    Email,
    Hours,
    Personnel,
    Person,
    Profile,
    Help,
    Settings,
    Error,
} from "pages";

const Router = ( { children, isCollapsed, ...rest } ) => (
    <BrowserRouter>
        <React.Fragment>
            { children }
            <div className={ isCollapsed ? "content collapsed" : "content" }>
                <Switch>
                    <Route exact path="/" { ...rest } component={ Home } />
                    <Route exact path="/projects" { ...rest } component={ Projects } />
                    <Route exact path="/project/:id" { ...rest } component={ Project } />
                    <Route exact path="/project/:id/board/:boardId" { ...rest } component={ Board } />
                    <Route exact path="/invoices" { ...rest } component={ Invoices } />
                    <Route exact path="/clients" { ...rest } component={ Clients } />
                    <Route exact path="/client/:id" { ...rest } component={ Client } />
                    <Route exact path="/agenda" { ...rest } component={ Agenda } />
                    <Route exact path="/email" { ...rest } component={ Email } />
                    <Route exact path="/hours" { ...rest } component={ Hours } />
                    <Route exact path="/personnel" { ...rest } component={ Personnel } />
                    <Route exact path="/person/:id" { ...rest } component={ Person } />
                    <Route exact path="/profile" { ...rest } component={ Profile } />
                    <Route exact path="/help" { ...rest } component={ Help } />
                    <Route exact path="/settings" { ...rest } component={ Settings } />
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
            </div>
        </React.Fragment>
    </BrowserRouter>
);

Router.propTypes = {
    children: PropTypes.node,
    isAuthenticated: PropTypes.bool,
    isCollapsed: PropTypes.bool.isRequired,
};

Router.defaultProps = {
    isAuthenticated: false,
    children: null,
};

export default Router;
