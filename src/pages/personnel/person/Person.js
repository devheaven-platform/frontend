import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Page, ModalForm } from "components";
import editPersonnel from "forms/EditPersonnel";
import { actions } from "./duck";

class PagePerson extends React.Component {
    static propTypes = {
        person: PropTypes.shape(),
        Load: PropTypes.func.isRequired,
        errors: PropTypes.shape(),
        match: PropTypes.shape().isRequired,
        Edit: PropTypes.func.isRequired,
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
            Edit,
        } = this.props;
        return (
            <Page>
                <Page.Header title={ `${ person.firstname } ${ person.lastname }` } subtitle={ person.phoneNumber }>
                    <ModalForm
                        title="Edit"
                        description="Edit this employee."
                        fields={ editPersonnel( person ) }
                        errors={ errors }
                        submit={ Edit }
                    />
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
    Edit: payload => dispatch( actions.edit( payload ) ),
} );

export default connect( mSTP, mDTP )( PagePerson );
