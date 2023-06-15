import axios from "axios";
import * as types from "./actiontypes";
export const getCurrentLocation = () => (dispatch) => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    dispatch({ type: types.GET_CURRENT_LOCATION_REQUEST });
    const { latitude, longitude } = position.coords;
    try {
      const response = await axios(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=10afb929d75f40c4b7980af92db75efb`
      );

      dispatch({
        type: types.GET_CURRENT_LOCATION_SUCCESS,
        payload: { full_address: response?.data.results[0].formatted },
      });
    } catch (error) {
      console.log("Error fetching location data:", error);
      dispatch({
        type: types.GET_CURRENT_LOCATION_FAILURE,
        payload: error,
      });
    }
  });
};

export const SearchMealByInput = (payload) => (dispatch) => {
  dispatch({ type: types.GET_CURRENT_LOCATION_REQUEST });
  try {
    dispatch({
      type: types.GET_CURRENT_LOCATION_SUCCESS,
      payload: { full_address: payload },
    });
  } catch (err) {
    dispatch({
      type: types.GET_CURRENT_LOCATION_FAILURE,
      payload: "We are unable to search meal center",
    });
  }
};
