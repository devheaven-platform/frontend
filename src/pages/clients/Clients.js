import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import clientsTable from "tables/Clients";
import createClientForm from "forms/CreateClient";
import { Page, ModalForm, Table } from "components";
import { PageLoading } from "pages";
import { actions } from "./duck";

class PageClients extends React.Component {
    static propTypes = {
        clients: PropTypes.arrayOf( PropTypes.shape() ),
        Load: PropTypes.func.isRequired,
        errors: PropTypes.shape(),
        Create: PropTypes.func.isRequired,
        Remove: PropTypes.func.isRequired,
    }

    static defaultProps = {
        clients: null,
        errors: [],
    }

    componentDidMount() {
        const { Load } = this.props;
        Load();
    }

    onContextMenuClick = ( action, client ) => {
        const { Remove } = this.props;

        if ( action === "remove" ) {
            Remove( client );
        }
    }

    render() {
        const {
            clients,
            Create,
            errors,
        } = this.props;

        if ( clients === null ) {
            return (
                <PageLoading />
            );
        }

        return (
            <Page>
                <Page.Header title="Clients" subtitle="View, create or archive a client">
                    <ModalForm
                        title="Create"
                        description="Create a new client."
                        fields={ createClientForm }
                        errors={ errors }
                        submit={ Create }
                    />
                </Page.Header>
                <Page.Content>
                    <Table
                        columns={ clientsTable }
                        data={ clients }
                        onContextMenuClick={ this.onContextMenuClick }
                    />
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

const mSTP = ( { clients: { clients, errors } } ) => ( { clients, errors } );

const mDTP = dispatch => ( {
    Load: () => dispatch( actions.load() ),
    Create: payload => dispatch( actions.create( payload ) ),
    Remove: payload => dispatch( actions.remove( payload ) ),
} );

export default connect( mSTP, mDTP )( PageClients );
