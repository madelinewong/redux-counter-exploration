import React from "react";
const Counter = props => {
    return (
      <div>
         <h1> {props.count} </h1>
        {/* <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button> */}
        <button onClick={() => props.incrementBy(2)}>+2</button>
        <button onClick={() => props.decrementBy(2)}>-2</button>
      </div>
    );
  }

export default Counter;