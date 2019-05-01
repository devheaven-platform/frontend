/* eslint-disable max-len */
const healthResponse = {
    message: "Service is running",
};

// Token provided by https://jwt.io
// {
//     sub: "c4fd422a-5059-407a-8374-64743d34212a",
//     roles: [
//         "USER",
//     ],
//     iat: 1516239022,
// }
const loginResponse = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNGZkNDIyYS01MDU5LTQwN2EtODM3NC02NDc0M2QzNDIxMmEiLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTUxNjIzOTAyMn0.dlndZwK5QpyYqyO4cg5jIlzXM_r6aVDfUOvWRLZ61G0",
    expires: new Date().getTime() + ( 24 * 60 * 60 * 1000 ),
};

function get( resource ) {
    if ( resource.includes( "/api/health/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 100, { data: healthResponse, status: 200 } ) );
    }
    return new Promise( ( resolve, reject ) => setTimeout( reject, 500, { data: { message: "An error occurred" }, status: 500 } ) );
}

function post( resource ) {
    if ( resource.includes( "/api/login/" ) ) {
        return new Promise( resolve => setTimeout( resolve, 100, { data: loginResponse, status: 200 } ) );
    }
    return new Promise( ( resolve, reject ) => setTimeout( reject, 500, { data: { message: "An error occurred" }, status: 500 } ) );
}

export default { get, post };
/* eslint-enable max-len */
