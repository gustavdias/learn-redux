import React from "react";
import Counter from "./Counters/Counter";
import CounterTwo from "./Counters/CounterTwo";
import CounterThree from "./Counters/CounterThree";


const App = () => {
  return (
    <React.Fragment>
      <Counter />
      <CounterTwo />
      <CounterThree/>
    </React.Fragment>
  );
};

export default App;
