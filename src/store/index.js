import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducer: {
    increment: (state, action) => {},
    decrement: (state, action) => {},
    add: (state, action) => {},
    subtract: (state, action) => {},
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export default counterStore;

// const INITIAL_VALUE = { counter: 0 };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     return { counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     return { counter: store.counter + Number(action.payload.num) };
//   } else if (action.type === "SUBTRACT") {
//     return { counter: store.counter - Number(action.payload.num) };
//   }
//   return store;
// };
