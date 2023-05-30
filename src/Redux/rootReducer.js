import { combineReducers } from "redux";
import { reducer as AuthReducer } from "./Auth/reducer";
import { reducer as AppReducer } from "./App/reducer";
const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
});

export default rootReducer;
