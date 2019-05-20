import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const RestrictedRoute = ( {
    isAuthenticated,
    roles,
    allowed,
    component: Component,
    ...rest
} ) => (
    <Route
        { ...rest }
        render={ props => (
            isAuthenticated && allowed.some( role => roles.includes( role ) ) ? (
                <Component { ...props } />
            ) : (
                <Redirect to={ {
                    pathname: "/login",
                    state: { from: props.location },
                    search: `?redirect=${ props.location.pathname }`,
                } }
                />
            )
        ) }
    />
);

RestrictedRoute.defaultProps = {
    location: {},
};

RestrictedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    roles: PropTypes.arrayOf( PropTypes.string ).isRequired,
    allowed: PropTypes.arrayOf( PropTypes.string ).isRequired,
    location: PropTypes.shape(),
    component: PropTypes.oneOfType( [ PropTypes.node, PropTypes.func ] ).isRequired,
};

export default RestrictedRoute;
