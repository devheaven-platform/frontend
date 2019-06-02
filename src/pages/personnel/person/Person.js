import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Page, ModalForm, Table } from "components";
import { actions } from "./duck";

class PagePerson extends React.Component {
    static propTypes = {
        person: PropTypes.shape(),
        Load: PropTypes.func.isRequired,
        errors: PropTypes.shape(),
        match: PropTypes.shape().isRequired,
    }

    static defaultProps = {
        person: {},
        errors: [],
    }

    componentDidMount() {
        const { Load, match } = this.props;
        Load( match.params.id );
    }

    render() {
        const {
            person,
            errors,
        } = this.props;
        return (
            <Page>
                <Page.Header title="Personnel" subtitle="View, create or archive a personnel member">

                </Page.Header>
                <Page.Content>
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

const mSTP = ( { person: { person, errors } } ) => ( { person, errors } );

const mDTP = dispatch => ( {
    Load: args => dispatch( actions.load( args ) ),
} );

export default connect( mSTP, mDTP )( PagePerson );
