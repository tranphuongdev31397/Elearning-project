import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "containers/Auth/module/reducer";
import thunk from "redux-thunk";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["authReducer"],
// };
const authPersistConfig = {
  key: "authReducer",
  storage: storage,
  whitelist: ["currentUser"],
};
const rootReducer = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer),
});
const persistedReducer = persistReducer(authPersistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
