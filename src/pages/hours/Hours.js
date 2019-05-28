import React from "react";
import { Page, ModalForm, Table } from "components";
import { Chart } from "react-google-charts";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import createWorkPeriodForm from "forms/CreateWorkPeriod";
import hoursTable from "tables/Hours";
import { PageLoading } from "pages";
import { actions, selectors } from "./duck";

class Hours extends React.Component {
    static propTypes = {
        Create: PropTypes.func.isRequired,
        Load: PropTypes.func.isRequired,
        Delete: PropTypes.func.isRequired,
        errors: PropTypes.shape(),
        hours: PropTypes.arrayOf( PropTypes.shape( {
            id: PropTypes.string.isRequired,
            context: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
        } ) ),
        user: PropTypes.string.isRequired,
    };

    static defaultProps = {
        hours: null,
        errors: {},
    };

    componentDidMount() {
        const { Load, user } = this.props;
        Load( { user } );
    }

    createWorkPeriod = ( payload ) => {
        const { Create, user } = this.props;
        const {
            date,
            context,
            startTime,
            endTime,
        } = payload;

        const startDate = selectors.addTime( date, startTime );
        const endDate = selectors.addTime( date, endTime );
        Create( {
            employee: user,
            context,
            startDate,
            endDate,
        } );
    }

    onContextMenuClick = ( action, hour ) => {
        const { Delete } = this.props;

        if ( action === "delete" ) {
            Delete( { id: hour.id } );
        }
    }

    render() {
        const { errors, hours } = this.props;

        if ( hours === null ) {
            return <PageLoading />;
        }

        const workPeriods = selectors.workPeriods( hours );
        const weekHours = selectors.weekHours( hours );

        return (
            <Page>
                <Page.Header title="Hours" subtitle="View or manage hours">
                    <ModalForm
                        title="Add"
                        description="Register a workperiod"
                        fields={ createWorkPeriodForm }
                        errors={ errors }
                        submit={ this.createWorkPeriod }
                    />
                </Page.Header>
                <Page.Content>
                    <div className="columns">
                        <div className="column">
                            <Chart
                                width="100%"
                                height="300px"
                                chartType="Bar"
                                loader={ <div>Loading analytics</div> }
                                data={ [
                                    [ "Day", "Hours" ],
                                    [ "Monday", weekHours[ 0 ] ],
                                    [ "Tuesday", weekHours[ 1 ] ],
                                    [ "Wednesday", weekHours[ 2 ] ],
                                    [ "Thursday", weekHours[ 3 ] ],
                                    [ "Friday", weekHours[ 4 ] ],
                                ] }
                                options={ {
                                    chart: {
                                        title: "Hours insight",
                                        subtitle: "How many hours you have worked this week.",
                                    },
                                } }
                            />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Table
                                columns={ hoursTable }
                                data={ workPeriods }
                                onContextMenuClick={ this.onContextMenuClick }
                            />
                        </div>
                    </div>
                </Page.Content>
                <Page.Footer>
                    <p>{ `Copyright © ${ new Date().getFullYear() } Devheaven.nl`}</p>
                </Page.Footer>
            </Page>
        );
    }
}

const mSTP = ( { app: { user }, hours: { errors, hours } } ) => ( { user, errors, hours } );

const mDTP = dispatch => ( {
    Load: payload => dispatch( actions.load( payload ) ),
    Create: payload => dispatch( actions.create( payload ) ),
    Delete: payload => dispatch( actions.remove( payload ) ),
} );

export default connect( mSTP, mDTP )( Hours );
