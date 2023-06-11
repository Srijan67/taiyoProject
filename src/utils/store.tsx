import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactSlice from "../features/contactSlice";
let persistConfig = {
  key: "root",
  storage,
};
let rootReducer = combineReducers({
  contact: contactSlice,
});
let persistedReducer = persistReducer(persistConfig, rootReducer);
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
