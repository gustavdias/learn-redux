import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./store/reducers/reducer"; //! {counterReducer} because it isn't a default
import { Provider } from "react-redux";
import logger from "redux-logger";

//1st middleware (catches the Action before it hits the Reducer) - log to console
const myLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("middleware ran");
      return next(action); // passes the action object ot the reducer - passes our action object to the next middleware or to the reducer- without this the middleware just drops the action object
    };
  };
};

//short middleware - short syntax - shorthand notation for arrow functions
const myLogger2 = (store) => (next) => (action) => {
  console.log("short middleware ran");
  return next(action);
};

//2nd middleware
const secondMiddleware = (store) => (next) => (action) => {
  console.log("secondMiddleware ran");
  return next(action);
};

//3rd middleware - when counter reaches 10, do not increase further and start to decrement by one
const capAltTen = (store) => (next) => (action) => {
  console.log("store: ", store);
  //store have access to 2 functions:
  //dispatch: ƒ dispatch()
  //getState: ƒ getState() - get our state
  if (store.getState() >= 10) {
    console.log("capAltTen ran");
    return next({ type: "DECREMENT" });
  }
  return next(action);
};

//you need to include your middleware inside createStore with applyMiddleware
const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, myLogger2, secondMiddleware, capAltTen, logger)
);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
ReactDOM.render(app, document.getElementById("root"));
