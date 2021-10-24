import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "containers/Auth/module/reducer";
import userInfoReducer from "containers/Auth/Profile/module/reducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};
const authPersistConfig = {
  key: "authReducer",
  storage: storage,
  whitelist: ["currentUser"],
};
const rootReducer = combineReducers({
  authReducer,
  userInfoReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
