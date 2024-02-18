import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counter = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state, action) => {
            // state.value = state.value + action.payload
            state.value++
        },
        decrement: (state, action) => {
            state.value--
        },
        multiply: (state, action) => {
            state.value = state.value * 10
        },
        divide: (state, action) => {
            state.value = state.value / 10
        },
    }
})
console.log(counter)
export const {
    increment,
    decrement,
    multiply,
    divide
} = counter.actions
export default counter.reducer