const members = [
    {
        id: "063a240c-85f6-47ec-ac69-b28a9212182e",
        firstname: "Simon",
        lastname: "van Someren",
    },
    {
        id: "a27cff65-fca0-488a-beaa-24b584384abe",
        firstname: "mario",
        lastname: "mediastudent",
    },
];

const client = {
    id: "be6d42d7-3ab6-4371-9724-3fdac1e9ed27",
    name: "Mario's shaddy crypto",
    description: "marios crypto en media company",
    contact: "Dossantos",
    image: "https://steemitimages.com/DQmS7T5r2eeEWvx8CphpcgC1sYEYBkYSo6iirJqXdZGHQFT/image.png",
};

const get = ( resource ) => {
    if ( resource.includes( "/users/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 50, { data: members[ Math.floor( Math.random() * members.length ) ], status: 200 } ) );
    }
    if ( resource.includes( "/clients/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 50, { data: client, status: 200 } ) );
    }
    if ( resource.includes( "/members/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 50, { data: members, status: 200 } ) );
    }
    return new Promise( reject => setTimeout( reject, 50, { data: "An error occurred", status: 500 } ) );
};

export default {
    get,
};
