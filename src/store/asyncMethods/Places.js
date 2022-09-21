import axios from "axios";
import {
  CLOSE_LOADER,
  PLACE_ERRORS,
  PLACE_SUCCESS,
  SET_LOADER,
} from "../types/PlaceType";

export const getPlaces = (state) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axios.get("/places");
      console.log(data);
      dispatch({ type: PLACE_SUCCESS, payload: data.response });
      dispatch({ type: CLOSE_LOADER });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({
        type: PLACE_ERRORS,
        payload: error.response.data.errors,
      });
      console.log(error);
    }
  };
};
