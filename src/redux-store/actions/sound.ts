/* node modules */
import { createAction } from "@reduxjs/toolkit";

/**
  * createAction - works in tandem with createReducer in redux toolkit. provides an abstraction to create 
  * simple action creator functions.
  */
const soundOn = createAction("sound/on");
const soundOff = createAction("sound/off");

/* exports */
export { soundOn, soundOff };
