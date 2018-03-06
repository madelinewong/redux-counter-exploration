import React from "react";
const Counter = props => {
  console.log(props);
    return (
      <div>
         <h1> {props.count} </h1>
        {/* <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button> */}
        <button onClick={() => props.incrementBy(props.value)}>+</button>
        <button onClick={() => props.decrementBy(props.value)}>-</button>
        
      </div>
    );
  }

export default Counter;