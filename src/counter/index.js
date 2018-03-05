import * as types from './types';
console.log('types');

//inital state 
const initalState = 0;
//reducer (how state changes)
const countReducer = (state=initalState, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1; 
    case "DECREMENT": 
      return state - 1;
      default: 
      return state
  }
};

export default countReducer;