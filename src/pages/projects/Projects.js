import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import projectForm from "forms/Project";
import { Page, ModalForm } from "components";
import { PageLoading } from "pages";
import { actions } from "./duck";

class PageProjects extends React.Component {
    static propTypes = {
        projects: PropTypes.arrayOf( PropTypes.shape() ),
        clients: PropTypes.arrayOf( PropTypes.shape() ),
        errors: PropTypes.shape(),
        Load: PropTypes.func.isRequired,
        Create: PropTypes.func.isRequired,
        Archive: PropTypes.func.isRequired,
    }

    static defaultProps = {
        projects: null,
        clients: null,
        errors: {},
    }

    componentDidMount() {
        const { Load } = this.props;
        Load();
    }

    render() {
        const {
            projects,
            clients,
            errors,
            Create,
        } = this.props;

        if ( projects === null || clients === null ) {
            return <PageLoading />;
        }

        return (
            <Page>
                <Page.Header title="Projects" subtitle="View, create or archive projects">
                    <ModalForm
                        title="Create"
                        description="Create a new project."
                        fields={ projectForm( { clients } ) }
                        errors={ errors }
                        submit={ Create }
                    />
                </Page.Header>
                <Page.Content>
                           Content
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

const mSTP = ( { projects: { projects, clients, errors } } ) => ( { projects, clients, errors } );

const mDTP = dispatch => ( {
    Load: () => dispatch( actions.load() ),
    Create: payload => dispatch( actions.create( payload ) ),
    Archive: payload => dispatch( actions.archive( payload ) ),
} );

export default connect( mSTP, mDTP )( PageProjects );
