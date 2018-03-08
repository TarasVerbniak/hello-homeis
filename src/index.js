import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import sagas from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagas.map(s => sagaMiddleware.run(s));

const render = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(render(), document.getElementById("root"));
registerServiceWorker();
