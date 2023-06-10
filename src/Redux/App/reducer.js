import Cookies from "js-cookie";
import * as types from "./actiontypes";
const initialState = {
  isLoading: false,
  current_location: {},
  isError: false,
  error_msg: "",
};

export function AppReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CURRENT_LOCATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CURRENT_LOCATION_SUCCESS:
      Cookies.set("current_location", payload?.full_address, { expires: 7 });
      return {
        ...state,
        isLoading: false,
        current_location: payload,
      };
    case types.GET_CURRENT_LOCATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error_msg: payload,
        current_location: [],
      };

    default:
      return state;
  }
}
