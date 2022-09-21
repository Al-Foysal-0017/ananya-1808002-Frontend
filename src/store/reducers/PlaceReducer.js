import {
  CLOSE_LOADER,
  PLACE_ERRORS,
  PLACE_SUCCESS,
  SET_LOADER,
} from "../types/PlaceType";
const initState = {
  loading: false,
  placeErrors: [],
  places: [],
};

const PlaceReducer = (state = initState, action) => {
  if (action.type === SET_LOADER) {
    return { ...state, loading: true };
  } else if (action.type === CLOSE_LOADER) {
    return { ...state, loading: false };
  } else if (action.type === PLACE_ERRORS) {
    return { ...state, placeErrors: action.payload };
  } else if (action.type === PLACE_SUCCESS) {
    return {
      ...state,
      places: action.payload,
      placeErrors: [],
    };
  } else {
    return state;
  }
};
export default PlaceReducer;
