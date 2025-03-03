import React from 'react'

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Creatig slice 
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment:(state)=>{
        state.value += 1;
    },
    decrement:(state)=>{
        state.value -= 1;
    }
  },
});


// export action

export const { increment, decrement } = counterSlice.actions;

// setting store 


const Store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default Store;