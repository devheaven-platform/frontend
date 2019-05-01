const clientsResponse = [
    {
        id: "944e2e89-fa0c-4de1-8939-d2df1273d28e",
        name: "Client 1",
    },
    {
        id: "d0112084-dad1-4208-b7d8-bcd8b6503a1a",
        name: "Client 2",
    },
    {
        id: "3d75d9ac-8462-44bb-b631-85a1d7797a52",
        name: "Client 3",
    },
];

function get( resource ) {
    if ( resource.includes( "/clients/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 100, { data: clientsResponse, status: 200 } ) );
    }
    return new Promise( ( resolve, reject ) => setTimeout( reject, 500, { data: { message: "An error occurred" }, status: 500 } ) );
}

export default { get };
