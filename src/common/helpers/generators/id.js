const ids = {};

function id( prefix = "ID" ) {
    if ( !ids[ prefix ] ) {
        ids[ prefix ] = 1;
    } else {
        ids[ prefix ] += 1;
    }
    return `DEVHEAVEN__${ prefix }__${ ids[ prefix ] }`;
}

export default id;
