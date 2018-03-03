import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';
 

class App extends Component {
  render() {
    console.log('this');
    return (
    <div>
      <h1> {this.props.count} </h1>
      <button onClick={() => this.props.dispatch({type: 'INCREMENT'})}>+</button>
      <button onClick={() =>this.props.dispatch ({type: 'DECREMENT'})}>-</button>
    </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    count: state
  }
}

export default connect(mapStateToProps, null)(App);
