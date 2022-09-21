import axios from "axios";
import {
  CLOSE_LOADER,
  SET_LOADER,
  TRANSPORT_ERRORS,
  TRANSPORT_SUCCESS,
} from "../types/Transport";

export const getTransports = (state) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axios.get("/all/transports");
      console.log(data);
      dispatch({ type: TRANSPORT_SUCCESS, payload: data.response });
      dispatch({ type: CLOSE_LOADER });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({
        type: TRANSPORT_ERRORS,
        payload: error.response.data.errors,
      });
      console.log(error);
    }
  };
};
