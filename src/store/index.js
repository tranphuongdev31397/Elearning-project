import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
