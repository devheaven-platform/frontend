const usersResponse = [
    {
        id: "2699c81d-aa4c-4de9-8988-508329a74090",
        firstname: "Liwei",
        lastname: "Hu",
    },
    {
        id: "063a240c-85f6-47ec-ac69-b28a9212182e",
        firstname: "Simon",
        lastname: "van Someren",
    },
    {
        id: "a27cff65-fca0-488a-beaa-24b584384abe",
        firstname: "Tom",
        lastname: "de Wildt",
    },
    {
        id: "08a1f6f9-63ca-4dab-aefe-ef22369a3ff0",
        firstname: "Mario",
        lastname: "Mediastudent",
    },
    {
        id: "92634002-c5c6-4502-8f54-e428060dca1a",
        firstname: "Pedro",
        lastname: "Dos Santos",
    },
];

const clientResponse = {
    id: "944e2e89-fa0c-4de1-8939-d2df1273d28e",
    name: "Client 1",
    description: "Client 1 Description",
    contact: "client@example.com",
    image: null,
};

const get = ( resource ) => {
    if ( resource.match( /(\/users\/).+/ ) ) {
        return new Promise( resolve => setTimeout( resolve, 100, { data: usersResponse[ Math.floor( Math.random() * usersResponse.length ) ], status: 200 } ) );
    }
    if ( resource.includes( "/users/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 100, { data: usersResponse, status: 200 } ) );
    }
    if ( resource.includes( "/clients/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 100, { data: clientResponse, status: 200 } ) );
    }
    return new Promise( ( resolve, reject ) => setTimeout( reject, 500, { data: "An error occurred", status: 500 } ) );
};

export default {
    get,
};
