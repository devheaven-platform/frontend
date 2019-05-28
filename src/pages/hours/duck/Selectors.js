import moment from "moment";

const addTime = ( date, time ) => {
    const hours = Number( time.split( ":" )[ 0 ] );
    const minutes = Number( time.split( ":" )[ 1 ] );

    const newDate = new Date( date );
    newDate.setHours( hours );
    newDate.setMinutes( minutes );
    return newDate;
};

const workPeriods = hours => hours.map( hour => ( {
    ...hour,
    date: hour.startDate,
    beginTime: moment( hour.startDate ).format( "HH:mm" ),
    endTime: moment( hour.endDate ).format( "HH:mm" ),
    hours: moment( hour.endDate ).diff( moment( hour.startDate ), "hours", true ),
} ) );

const weekDates = () => {
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

const weekHours = ( hours ) => {
    const weekDate = weekDates();
    const dayHours = [ 0, 0, 0, 0, 0 ];
    hours.forEach( ( hour ) => {
        const beginTime = moment( hour.startDate );
        const endTime = moment( hour.endDate );
        const workedHours = endTime.diff( beginTime, "hours", true );

        for ( let i = 0; i < 5; i += 1 ) {
            const dayOfWeek = moment( weekDate[ 0 ] ).add( i + 1, "days" );
            if ( beginTime.isSame( dayOfWeek, "day" ) ) {
                dayHours[ i ] += workedHours;
            }
        }
    } );
    return dayHours;
};

export default {
    addTime,
    workPeriods,
    weekDates,
    weekHours,
};
