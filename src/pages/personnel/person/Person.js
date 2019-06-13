import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Page, ModalForm } from "components";
import editPersonnel from "forms/EditPersonnel";
import { PageLoading } from "pages";
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
        person: null,
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
        if ( person === null ) {
            return <PageLoading />;
        }
        return (
            <Page>
                <Page.Header title={ `${ person.firstname } ${ person.lastname }` }>
                    <ModalForm
                        title="Edit"
                        description="Edit this employee."
                        fields={ editPersonnel( person ) }
                        errors={ errors }
                        submit={ Edit }
                    />
                </Page.Header>
                <Page.Content>
                    <div className="columns">
                        <div className="column">
                            <div className="has-margin-bottom-3">
                                <p><b>Address</b></p>
                                <p>{ person.address }</p>
                            </div>
                            <div className="has-margin-bottom-3">
                                <p><b>Phone Number</b></p>
                                <p>{ person.phoneNumber }</p>
                            </div>
                            <div className="has-margin-bottom-3">
                                <p><b>Salary</b></p>
                                <p>{ person.salary }</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="has-margin-bottom-3">
                                <p><b>Emails</b></p>
                                <div>{ person.emails.map( e => <p key={ e }>{ e }</p> ) }</div>
                            </div>
                            <div className="has-margin-bottom-3">
                                <p><b>Roles</b></p>
                                <div className="tags">
                                    { person.roles.map( r => (
                                        <span key={ r } className="tag is-info  ">
                                            { r.replace( "ROLE_", "" ).toLowerCase() }
                                        </span>
                                    ) ) }
                                </div>
                            </div>
                        </div>
                    </div>
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
