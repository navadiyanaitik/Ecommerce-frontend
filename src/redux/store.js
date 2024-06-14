import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import userSlice from "./slice/userSlice";
import userProfileSlice from "./slice/userProfileSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  product: productSlice,
  user: userSlice,
  userProfile: userProfileSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
