import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AuthReducer from "./reducers/AuthReducer";
import {
  PostReducer,
  FetchPosts,
  FetchPost,
  UpdatePost,
  UpdateImage,
} from "./reducers/PostReducer";
import { updateName } from "./reducers/ProfileReducer";
import PlaceReducer from "./reducers/PlaceReducer";
import TransportReducer from "./reducers/TransportReducer";
const rootReducers = combineReducers({
  user: AuthReducer,
  places: PlaceReducer,
  transports: TransportReducer,
  PostReducer,
  FetchPosts,
  FetchPost,
  UpdatePost,
  UpdateImage,
  updateName,
});
const middlewares = [thunkMiddleware];
const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default Store;
