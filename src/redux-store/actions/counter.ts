/* node modules */
import { createAction } from "@reduxjs/toolkit";

/**
  * createAction - works in tandem with createReducer in redux toolkit. provides an abstraction to create 
  * simple action creator functions.
  */
const counterIncrement = createAction("counter/increment");
const coutnerDecrement = createAction("counter/decrement");
const counterReset = createAction("counter/reset");

/* exports */
export { counterReset, counterIncrement, coutnerDecrement };
