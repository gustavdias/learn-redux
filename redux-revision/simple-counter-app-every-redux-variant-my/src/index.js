import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";

//!{Redux
import { createStore } from "redux"; //? Creates the store from the reducer
import { Provider } from "react-redux"; //? Provides the store to the app
import reducer from "./store/reducers/reducer";
//!Redux }

const store = createStore(reducer);

//! {Dispatch
//* store has a function in it called dispatch
//* dispatch(action) - the only way to trigger a state change
// store.dispatch({ type: "INCREMENT" });//not in use anymore, they were transferred into Counter.js
//* passes an action object - an action object should have at least a type property - it a normal JS object that needs a type property
// store.dispatch({ type: "DECREMENT" });//not in use anymore, they were transferred into Counter.js
//! Dispatch}

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

render(app, document.getElementById("root"));
