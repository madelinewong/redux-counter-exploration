import React from "react";
const Counter = props => {
    return (
      <div>
         <h1> {props.count} </h1>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </div>
    );
  }

export default Counter;