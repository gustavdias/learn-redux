import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import postsReducer from "./store/reducers/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  postsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));

//!!! What redux-thunk do???
//* thunk allows our actions creators to return an object or return a function
