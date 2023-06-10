import { combineReducers } from "redux";
import { AuthReducer } from "./Auth/reducer";
import {AppReducer } from "./App/reducer";
const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
});

export default rootReducer;
