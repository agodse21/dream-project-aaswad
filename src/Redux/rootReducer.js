import { combineReducers } from "redux";
import { reducers as AppReducer } from "./App/reducer";
import { reducer as CartReducer } from "./Addtocart/reducer";
import { reducer as WishlistReducer } from "./wishlist/reducer";
import { AuthReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  AppReducer,
  CartReducer,
  AuthReducer,
  WishlistReducer,
});

export default rootReducer;
