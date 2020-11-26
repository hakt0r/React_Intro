import { Store } from "@material-ui/icons";

import { combineReducers, createStore } from "redux";

import { authReducer } from "./Auth/redux";
import { postReducer } from "./Post/redux";

// const store = createStore(authReducer);
// if only one reducer

const store = createStore(
  combineReducers({
    auth:authReducer, // state.auth
    post:postReducer  // state.post
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// {
//   auth: { DEFAULT_AUTH_STATE },
//   post: { DEFAULT_POST_STATE } 
// }

export { store };