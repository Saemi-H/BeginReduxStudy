// 카운터 관련 상태 로직
import { createAction, handleActions } from "redux-actions";


// define action tyle
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// actions 
// export to use in different files
// export const increment=()=>({type: INCREMENT});
// export const decrement=()=>({type: DECREMENT});

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// define initial state
const initialState={
    number : 0
};

// handleActions first param = execute actions
// 2nd param = initial state
export default handleActions({
    [INCREMENT] : (state, action) => {
        return {number : state.number + 1};
    },
    [DECREMENT] : ({number}) => ({number : number - 1})
}, initialState)

// create Reducer, export
// export default function reducer(state=initialState, action){
//     // return depends on action
//     // define state = initialState
//     switch(action.type){
//         case INCREMENT:
//             return {number : state.number + 1};
//         case DECREMENT:
//             return {number : state.number - 1};
//         default:
//             return state;
//     }
// }
