import React from "react";
import { Page, ModalForm, Table } from "components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { PageLoading } from "pages";
import createWorkPeriodForm from "forms/CreateWorkPeriod";
import hoursTable from "tables/Hours";
import moment from "moment";
import { Chart } from "react-google-charts";
import { actions } from "./duck";

class Hours extends React.Component {
    componentDidMount() {
        const { Load, user } = this.props;
        Load( {
            employee: user,
        } );
    }

    createWorkPeriod = ( payload ) => {
        const { Create, user } = this.props;
        const { addHoursAndMinutes } = Hours;
        const {
            date, context, startTime, endTime,
        } = payload;
        const startDate = addHoursAndMinutes( date, startTime );
        const endDate = addHoursAndMinutes( date, endTime );
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
        const { getWeekDates } = Hours;
        if ( hours === null ) {
            return <PageLoading />;
        }
        const workPeriods = hours.map( ( h ) => {
            const startDate = new Date( h.startDate );
            const endDate = new Date( h.endDate );
            const date = moment( startDate );
            const beginTime = moment( startDate );
            const endTime = moment( endDate );
            const workedHours = endTime.diff( beginTime, "hours", true );
            return ( {
                id: h.id,
                context: h.context,
                date,
                beginTime: beginTime.format( "HH:mm" ),
                endTime: endTime.format( "HH:mm" ),
                hours: workedHours,
            } );
        } );

        const weekDates = getWeekDates();
        const weekHours = [ 0, 0, 0, 0, 0 ];
        hours.forEach( ( h ) => {
            const beginTime = moment( h.startDate );
            const endTime = moment( h.endDate );
            const workedHours = endTime.diff( beginTime, "hours", true );

            for ( let i = 0; i < 5; i += 1 ) {
                const dayOfWeek = moment( weekDates[ 0 ] ).add( i + 1, "days" );
                if ( beginTime.isSame( dayOfWeek, "day" ) ) {
                    weekHours[ i ] += workedHours;
                }
            }
        } );
        return (
            <Page>
                <Page.Header title="Hours" subtitle="View or manage hours">

                </Page.Header>
                <Page.Content>
                    <div className="columns">
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
                    <div className="columns">
                        <ModalForm
                            title="Add"
                            description="Register a workperiod"
                            fields={ createWorkPeriodForm() }
                            errors={ errors }
                            submit={ this.createWorkPeriod }
                        />
                    </div>
                    <div className="columns">

                        <Table
                            columns={ hoursTable }
                            data={ workPeriods }
                            onContextMenuClick={ this.onContextMenuClick }
                        />
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
Hours.getWeekDates = function getWeekDates() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const numDay = now.getDate();

    const start = new Date( now );
    start.setDate( numDay - dayOfWeek );
    start.setHours( 0, 0, 0, 0 );

    const end = new Date( now );
    end.setDate( numDay + ( 7 - dayOfWeek ) );
    end.setHours( 0, 0, 0, 0 );

    return [ start, end ];
};
Hours.addHoursAndMinutes = function addHoursAndMinutes( date, time ) {
    const hours = Number( time.split( ":" )[ 0 ] );
    const minutes = Number( time.split( ":" )[ 1 ] );

    const newDate = new Date( date );
    newDate.setHours( hours );
    newDate.setMinutes( minutes );
    return newDate;
};
Hours.propTypes = {
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
