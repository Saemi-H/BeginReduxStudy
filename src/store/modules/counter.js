// 카운터 관련 상태 로직
import { createAction } from "redux-actions";


// define action tyle
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// actions 
// export to use in different files
export const increment=()=>({type: INCREMENT});
export const decrement=()=>({type: DECREMENT});

// define initial state
const initialState={
    number : 0
};

// create Reducer, export
export default function reducer(state=initialState, action){
    // return depends on action
    // define state = initialState
    switch(action.type){
        case INCREMENT:
            return {number : state.number + 1};
        case DECREMENT:
            return {number : state.number - 1};
        default:
            return state;
    }
}
