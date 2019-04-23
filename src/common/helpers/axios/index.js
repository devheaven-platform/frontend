import axios from "axios";

export default axios.create( {
    baseURL: process.env[ `REACT_APP_API_URL_${ process.env.REACT_APP_ENV_NAME }` ],
    timeout: 10000,
} );
