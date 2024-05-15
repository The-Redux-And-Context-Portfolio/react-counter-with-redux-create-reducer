/* node modules */
import { createReducer } from "@reduxjs/toolkit";

/* app imports */
import { soundOn, soundOff } from "../actions/sound";

/**
  * createReducer - is a redux toolkit method that helps create a reducer function. this is one level (less abstracted) 
  * than the createSlice method in redux toolkit
  */
const initialState = true;
const soundReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(soundOn, (state) => {
      return true;
    })
    .addCase(soundOff, (state) => {
      return false;
    })
});

/* exports */
export default soundReducer;
