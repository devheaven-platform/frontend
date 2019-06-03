import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Page, ModalForm } from "components";
import editClient from "forms/EditClient";
import { PageLoading } from "pages";
import { actions } from "./duck";

class PageClient extends React.Component {
    static propTypes = {
        client: PropTypes.shape(),
        Load: PropTypes.func.isRequired,
        errors: PropTypes.shape(),
        match: PropTypes.shape().isRequired,
        Edit: PropTypes.func.isRequired,
    }

    static defaultProps = {
        client: null,
        errors: [],
    }

    componentDidMount() {
        const { Load, match } = this.props;
        Load( match.params.id );
    }

    render() {
        const {
            client,
            errors,
            Edit,
        } = this.props;

        if ( client === null ) {
            return <PageLoading />;
        }
        return (
            <Page>
                <Page.Header title={ `${ client.name }` } subtitle={ client.description }>
                    <ModalForm
                        title="Edit"
                        description="Edit this client."
                        fields={ editClient( client ) }
                        errors={ errors }
                        submit={ Edit }
                    />
                </Page.Header>
                <Page.Content>
                    <p>
                        Contact:
                        { `${ client.contact.firstname } ${ client.contact.lastname } `}
                    </p>
                    <p>
                        logo:
                        {client.logo}
                    </p>
                </Page.Content>
                <Page.Footer>
                    <p>
                        { `Copyright © ${ new Date().getFullYear() } Devheaven.nl`}
                    </p>
                </Page.Footer>
            </Page>
        );
    }
}

const mSTP = ( { client: { client, errors } } ) => ( { client, errors } );

const mDTP = dispatch => ( {
    Load: args => dispatch( actions.load( args ) ),
    Edit: payload => dispatch( actions.edit( payload ) ),
} );

export default connect( mSTP, mDTP )( PageClient );
