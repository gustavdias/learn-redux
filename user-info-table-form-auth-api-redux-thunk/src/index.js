import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import authReducer from "./store/reducers/auth";
import userDataFromServer from "./store/reducers/userDataFromServer";



//redux chrome devtools
//only set this extension if we are in development mode
const composeEnhancers =
  process.env.REACT_APP_NODE_ENVX === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

//combine reducers
const rootReducer = combineReducers({
  order: userDataFromServer,
  auth: authReducer,
});

//create store use composeEnhancers to combine applyMiddleware (applies a list of middleware and composeEnhancers combines them, like combineReducers does with reducers)
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) //thunk allows the addition of middleware for receiving async data
);

const app = (
  <React.StrictMode>
    {/* //Provider - "injects" the store into the react components - it's what
    connects redux to react //store - for hooking up the provider component with
    our store - set up special property */}
    <Provider store={store}>
      <BrowserRouter>
        <App />{" "}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
