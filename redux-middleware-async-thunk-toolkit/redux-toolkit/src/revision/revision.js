function counter(state, action) {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

var store = Redux.createStore(counter);

document.getElementById("increment").addEventListener("click", function () {
  store.dispatch({ type: "INCREMENT" });
});

//ES6 version of the above
//write "action creator" functions instead of writing the action objects directly in the code
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//*action creator functions 
function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const store = Redux.createStore(counter);

document.getElementById("increment").addEventListener("click", () => {
  store.dispatch(increment());
});


//! configureStore()
//create a Redux store by calling createStore() and passing in your root reducer function. Redux Toolkit has a configureStore() function that wraps createStore() to do the same thing
// Before:
const store = createStore(counter)

// After:
const store = configureStore({
  reducer: counter
})
//? under the hood, the store has been configured to enable using the Redux DevTools Extension to view the history of dispatched actions and how the store state changed, and has had some Redux middleware included by default. 


//! createAction