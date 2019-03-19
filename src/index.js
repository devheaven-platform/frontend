import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app";
import store from "./store";
import * as serviceWorker from "./serviceWorker";

// CSS
import "assets/sass/style.sass";

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById( "root" ),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
