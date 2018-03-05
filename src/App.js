import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';

import Counter from './Counter.js';
import { increment, decrement } from './counter/actions';

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

class App extends Component {
  render() {
    console.log(this.props);
    return (
    <div>
      <Counter {...this.props} />
      <Counter {...this.props} /> 
    </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()), 
    decrement: () => dispatch(decrement()), 
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);