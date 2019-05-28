import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import personnelTable from "tables/Personnel";
import createPersonnelForm from "forms/CreatePersonnel";
import { Page, ModalForm, Table } from "components";
import { actions } from "./duck";

class PagePersonnel extends React.Component {
    static propTypes = {
        personnel: PropTypes.arrayOf( PropTypes.shape() ),
        Load: PropTypes.func.isRequired,
        errors: PropTypes.shape(),
        Create: PropTypes.func.isRequired,
        Remove: PropTypes.func.isRequired,
    }

    static defaultProps = {
        personnel: [],
        errors: [],
    }

    componentDidMount() {
        const { Load } = this.props;
        Load();
    }

    onContextMenuClick = ( action, person ) => {
        const { Remove } = this.props;

        if ( action === "remove" ) {
            Remove( person );
        }
    }

    render() {
        const {
            personnel,
            Create,
            errors,
        } = this.props;
        return (
            <Page>
                <Page.Header title="Personnel" subtitle="View, create or archive a personnel member">
                    <ModalForm
                        title="Create"
                        description="Create a new personnel member."
                        fields={ createPersonnelForm }
                        errors={ errors }
                        submit={ Create }
                    />
                </Page.Header>
                <Page.Content>
                    <Table
                        columns={ personnelTable }
                        data={ personnel }
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

const mSTP = ( { personnel: { personnel, errors } } ) => ( { personnel, errors } );

const mDTP = dispatch => ( {
    Load: () => dispatch( actions.load() ),
    Create: payload => dispatch( actions.create( payload ) ),
    Remove: payload => dispatch( actions.remove( payload ) ),
} );

export default connect( mSTP, mDTP )( PagePersonnel );
