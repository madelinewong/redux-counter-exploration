import * as types from './types';
console.log('types');

//inital state 
const initalState = {
   count: 0
  };
//reducer (how state changes)
const countReducer = (state=initalState, action) => {
  console.log(action);
  switch(action.type){
    case "INCREMENT":
      return {
        ...state, 
        count: state.count + 1
      }; 
    case "DECREMENT": 
      return {
        ...state,
        count: state.count - 1
      };
   case types.DECREMENT_BY: 
   return {
     ...state,
     count: state.count - action.payload.value
   };
   case types.INCREMENT_BY: 
   return {
     ...state, 
     count: state.count + action.payload.value
   }
   default: 
   return state
  }
};

export default countReducer;