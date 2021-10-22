import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import authReducer from "containers/Auth/module/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  authReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
