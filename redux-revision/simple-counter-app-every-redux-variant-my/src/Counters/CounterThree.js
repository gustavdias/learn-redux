import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { decrementRedux, incrementRedux } from "../store/actions/actionCreator";

function Counter(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  //? useDispatch and useSelector are Redux hooks which can simplify these processes. Like with other React hooks, these can only be used in functional components, not class components. 
 //* The useSelector() hook is essentially a selector function that allows you to access the Redux state as its only argument.
 //* useSelector() runs when the component initially renders. It will also subscribe to the Redux store and run whenever an action is dispatched. 
  const countRedux = useSelector((state) => state.count);

  //* useDispatch() returns a reference to the Redux dispatch function, which we store in the variable dispatch. You can see from the onClick functions, we can now use dispatch like we would normally, passing it an action generator and the payload.
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <h2>actionCreator Counter Redux {props.test}</h2>
      <div>
        <button onClick={() => dispatch(decrementRedux())}>-</button>
        <span>{props.count}</span>
        <button onClick={() => dispatch(incrementRedux())}>+</button>
        <span>{countRedux}</span>
      </div>
    </div>
  );
}

//? the connect function injects the dispatch function as a prop - Tell what data you need with mapStateToProps
//* it takes the entire Redux state and it is expected to return a object where the keys are prop names and the values are prop values = it does a mapping of the state and passes each element as a prop key and a prop value
//here you'll say which kind of actions I want to dispatch in this container.
//state is the state that you set up on the reducer, initialState
const mapStateToProps = (state) => ({
  //pulls out from state - a key is count and the value is state.count
  //! Updating State Immutably
  count: state.count,
  test: state.test,
});
//*you in the end export an already connected component to the store - you make the connection between the component and the state that it needs during the export process
export default connect(mapStateToProps)(Counter);
// connect gives the Counter Container the mapStateToProps property count
