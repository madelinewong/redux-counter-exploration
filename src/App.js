import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import Counter from "./Counter.js";
import {
  incrementAction,
  decrementAction,
  incrementByAction,
  decrementByAction
} from "./counter/actions";

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

class App extends Component {
  constructor(){
    super();
    this.state = { 
      value: 0
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e){
    this.setState({
     value: +e.target.value
    });
    }
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <Counter {...this.props} /> */}
        <Counter {...this.props} {...this.state} />
        <input type="number" value={this.state.value} onChange={this.handleOnChange}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // increment: () => dispatch(incrementAction()),
    // decrement: () => dispatch(decrementAction()),
    incrementBy: (num) => dispatch(incrementByAction(num)),
    decrementBy: (num) => dispatch(decrementByAction(num))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
