import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [ sagaMiddleware ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
    rootReducer,
    composeEnhancers( applyMiddleware( ...middleware ) ),
);
sagaMiddleware.run( sagas );

export default store;
