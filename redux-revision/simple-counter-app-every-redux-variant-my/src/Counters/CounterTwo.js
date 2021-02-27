import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";
export class CounterTwo extends Component {
  state = {
    count: 0,
  };

  //! { Dispatch
  // incrementRedux = () => dispatch({ type: actionTypes.INCREMENT })
  
  // {
  //   this.props.dispatch({ type: "INCREMENT" });
  // };

  decrementRedux = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
  //! Dispatch }

  incrementHandler = () => {
    const stateCount = this.state.count;
    this.setState({ count: stateCount + 1 });
  };
  decrementHandler = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="counter">
        <h2>Class Counter</h2>
        <div>
          <button onClick={this.decrementHandler}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.incrementHandler}>+</button>
        </div>
        <h2>Counter Redux {this.props.test}</h2>
        <div>
          <button onClick={this.props.onDecrementCounter}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.props.onIncrementCounter}>+</button>
        </div>
        <h2>Counter Redux {this.props.test}</h2>
        <div>
          <button onClick={this.decrementRedux}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.incrementRedux}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //! Updating State Immutably
    count: state.count,
    test: state.test,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
  onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
});

// export default CounterTwo;

export default connect(mapStateToProps, mapDispatchToProps)(CounterTwo);
