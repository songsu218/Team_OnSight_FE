import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session"; // 세션 스토리지

import userInfo from "./userStore";
import searchPage from "./searchStore";
import recordInfo from "./recordStore";
import crewInfo from "./crewStore";
import userAllinfo from "./userAllStore";

const persistConfig = {
  key: "onsight",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  user: userInfo,
  userAll: userAllinfo,
  searchPage: searchPage,
  record: recordInfo,
  crew: crewInfo,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // 비직렬화 가능한 데이터가 포함된 액션을 무시합니다.
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PURGE",
        ],
        ignoredPaths: ["result"],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
