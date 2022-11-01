import type { PayloadAction } from "@reduxjs/toolkit";
import { configureStore, createSlice } from "@reduxjs/toolkit";
// Create A Slice
interface CounterState {
  counter: number;
}
const initialState: CounterState = {
  counter: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    add: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});
export const { increment, decrement, add } = counterSlice.actions;
export default counterSlice.reducer;
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
