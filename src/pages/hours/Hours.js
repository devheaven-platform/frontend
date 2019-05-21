import React from "react";
import { Page, ModalForm, Table } from "components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import createWorkPeriodForm from "forms/CreateWorkPeriod";
import hoursTable from "tables/Hours";
import { actions } from "./duck";

class Hours extends React.Component {
    componentDidMount() {
        const { Load, user } = this.props;
        Load( { employee: user } );
    }

    createWorkPeriod=( payload ) => {
        const { Create, user } = this.props;
        Create( { ...payload, employee: user } );
    }

    onContextMenuClick = ( action, hour ) => {
        const { Delete } = this.props;

        if ( action === "delete" ) {
            Delete( { id: hour.id } );
        }
    }

    render() {
        const { errors, hours } = this.props;
        const workPeriods = hours.map( h => ( {
            id: h.id,
            context: h.context,
            start: h.startDate,
            end: h.endDate,
        } ) );
        return (
            <Page>
                <Page.Content isCentered>
                    <div className="columns">
                        <ModalForm
                            title="Add"
                            description="Register a workperiod"
                            fields={ createWorkPeriodForm() }
                            errors={ errors }
                            submit={ this.createWorkPeriod }
                        />
                        <Table
                            columns={ hoursTable }
                            data={ workPeriods }
                            onContextMenuClick={ this.onContextMenuClick }
                        />
                    </div>
                </Page.Content>
            </Page>
        );
    }
}

Hours.propTypes = {
    Create: PropTypes.func.isRequired,
    Load: PropTypes.func.isRequired,
    Delete: PropTypes.func.isRequired,
    errors: PropTypes.shape(),
    hours: PropTypes.arrayOf( PropTypes.shape() ),
    user: PropTypes.string.isRequired,
};

Hours.defaultProps = {
    hours: null,
    errors: {},
};

const mSTP = ( { app: { user }, hours: { errors, hours } } ) => ( { user, errors, hours } );

const mDTP = dispatch => ( {
    Load: payload => dispatch( actions.load( payload ) ),
    Create: payload => dispatch( actions.create( payload ) ),
    Delete: payload => dispatch( actions.remove( payload ) ),
} );

export default connect( mSTP, mDTP )( Hours );
