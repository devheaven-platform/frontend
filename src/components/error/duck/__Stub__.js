function post( resource ) {
    if ( resource.includes( "/api/errors/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 100, { data: {}, status: 200 } ) );
    }
    return new Promise( ( resolve, reject ) => setTimeout( reject, 500, { data: { message: "An error occurred" }, status: 500 } ) );
}

export default { post };
