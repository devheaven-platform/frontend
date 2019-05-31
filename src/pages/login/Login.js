import React from "react";
import { NotificationManager } from "react-notifications";
import { GoogleLogin } from "react-google-login";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import queryString from "query-string";
import PropTypes from "prop-types";

import loginForm from "forms/Login";
import actions from "app/duck/Actions";

import icon from "assets/svg/icon.svg";
import { Page, Form } from "components";

class PageLogin extends React.Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        errors: PropTypes.shape(),
        Login: PropTypes.func.isRequired,
        LoginGoogle: PropTypes.func.isRequired,
        Logout: PropTypes.func.isRequired,
        history: PropTypes.shape().isRequired,
        location: PropTypes.shape().isRequired,
    };

    static defaultProps = {
        errors: {},
    };

    componentDidMount() {
        const { history, location, Logout } = this.props;
        const search = queryString.parse( location.search );

        if ( search.logout ) {
            Logout();
            history.push( { search: "" } );
        }
    }

    render() {
        const {
            isAuthenticated,
            errors,
            location,
            Login,
            LoginGoogle,
        } = this.props;

        if ( isAuthenticated ) {
            const search = queryString.parse( location.search );
            return <Redirect to={ search.redirect || "/" } />;
        }

        return (
            <Page background="light">
                <Page.Content isCentered>
                    <div className="box column is-3-fullhd is-6-tablet is-12-mobile has-padding-4">
                        <div className="has-text-centered has-margin-bottom-3">
                            <img src={ icon } alt="icon" className="is-rounded" width="64" height="64" />
                            <h6 className="subtitle is-6">Please login to proceed.</h6>
                        </div>
                        <Form
                            fields={ loginForm }
                            errors={ errors }
                            submit={ Login }
                            hasSubmitButton
                            submitButtonText="Login"
                        />
                        { process.env.NODE_ENV !== "development" && (
                            <React.Fragment>
                                <div className="is-divider" data-content="OR" />
                                <GoogleLogin
                                    clientId="739408487246-hknfi4iqvob2n2r7lrt0pj8acrnuuqfr.apps.googleusercontent.com"
                                    buttonText="Login with Google"
                                    onSuccess={ LoginGoogle }
                                    onFailure={ () => NotificationManager.error( "An error has occurred while logging in", "Error", 3000 ) }
                                    cookiePolicy="single_host_origin"
                                />
                            </React.Fragment>
                        ) }
                    </div>
                </Page.Content>
            </Page>
        );
    }
}

const mSTP = ( {
    app: {
        isAuthenticated,
        errors,
    },
} ) => ( {
    isAuthenticated, errors,
} );

const mDTP = dispatch => ( {
    Login: values => dispatch( actions.login( values ) ),
    LoginGoogle: values => dispatch( actions.loginGoogle( values ) ),
    Logout: () => dispatch( actions.logout() ),
} );

export default connect( mSTP, mDTP )( PageLogin );
