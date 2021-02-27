import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/actions/action";

const App = () => {
  //? Similar to mapStateToProps()
  const count = useSelector((state) => state);
  // useSelector hook - useSelector is a function that takes the current state as an argument and returns whatever data you want from it. It’s very similiar to mapStateToProps() and it allows you to store the return values inside a variable within the scope of you functional components instead of passing down as props.

  //? Similar to mapDispatchToProps()- dispatch an action to the store by importing useDispatch
  // with this, we are able to dispatch any action to the store by simply adding an action as an argument to the new variable
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default App;
