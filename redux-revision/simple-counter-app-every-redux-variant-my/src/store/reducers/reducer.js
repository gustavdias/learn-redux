

//! {Reducer
//? The reducer tells Redux what the initial state of the store is
const initialState = {
    count: 0,
    test: "testing"
  };
  //? Reducer - receives 2 arguments: state and action
  //* every time something happens, redux calls this reducer
  //   const reducer = (state = initialState, action) => {
  function reducer(state = initialState, action) {
    console.log(action);
 
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          count: state.count - 1,
        };
      default:
        return state;//it ignores actions that it does not understand by returning the state unchanged
    }
  }

  export default reducer