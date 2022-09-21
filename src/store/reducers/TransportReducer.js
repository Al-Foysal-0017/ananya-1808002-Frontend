import {
  CLOSE_LOADER,
  SET_LOADER,
  TRANSPORT_ERRORS,
  TRANSPORT_SUCCESS,
} from "../types/Transport";

const initState = {
  loading: false,
  transportErrors: [],
  transport: [],
};

const TransportReducer = (state = initState, action) => {
  if (action.type === SET_LOADER) {
    return { ...state, loading: true };
  } else if (action.type === CLOSE_LOADER) {
    return { ...state, loading: false };
  } else if (action.type === TRANSPORT_ERRORS) {
    return { ...state, transportErrors: action.payload };
  } else if (action.type === TRANSPORT_SUCCESS) {
    return {
      ...state,
      transport: action.payload,
      transportErrors: [],
    };
  } else {
    return state;
  }
};
export default TransportReducer;
