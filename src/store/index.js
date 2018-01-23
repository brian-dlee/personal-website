import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import config from "../config";

export default () => {
  const middleware = [reduxThunk];

  return createStore(
    combineReducers(reducers),
    config.environment === "development"
      ? composeWithDevTools(applyMiddleware(...middleware))
      : applyMiddleware(...middleware)
  );
};
