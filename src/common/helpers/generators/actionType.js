const ADDONS = [ "SUCCESS", "ERROR" ];

const path = () => Math.random().toString().replace( "0.", "@DEVHEAVEN_" );

export default ( actions, addons = ADDONS ) => actions.reduce( ( a, item ) => {
    if ( typeof item !== "string" ) throw new Error( "action name must be a string" );

    const action = { ...a, [ item ]: `${ path() }_${ item }` };
    return ( addons || [] ).reduce( ( b, addon ) => ( {
        ...b,
        [ `${ item }_${ addon }` ]: `${ path() }_${ item }_${ addon }`,
    } ), action );
}, {} );
