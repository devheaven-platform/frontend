const personnelResponse = [
    {
        id: 1,
        firstname: "test",
        lastname: "testtt",
        salary: 100,
        address: "simonss straat",
    },
];

const createResponse = {
    firstname: "new", lastname: "lastname", salary: 100, address: "big dick street 10",
};

function get( resource ) {
    if ( resource.includes( "/personnel/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 100, { data: personnelResponse, status: 200 } ) );
    }
    return new Promise( ( resolve, reject ) => setTimeout( reject, 500, { data: { message: "An error occurred" }, status: 500 } ) );
}

function post( resource ) {
    if ( resource.includes( "/personnel/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 100, { data: createResponse, status: 200 } ) );
    }
    return new Promise( ( resolve, reject ) => setTimeout( reject, 500, { data: { message: "An error occurred" }, status: 500 } ) );
}

export default { get, post };
