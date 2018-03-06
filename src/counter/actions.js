import * as types from './types';

// export const incrementAction = () => ({
//     type: types.INCREMENT
// });

// export const decrementAction = () => ({
//     type: types.DECREMENT
// });

export const incrementByAction = (num) => ({
    type: types.INCREMENT_BY,
    payload: {
        value: num
    }
});
export const decrementByAction = (num) => ({
    type: types.DECREMENT_BY,
    payload: {
        value: num
    }
}); 