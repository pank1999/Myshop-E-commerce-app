import { configureStore,combineReducers } from "@reduxjs/toolkit";
import userReducer from "./UserRedux";
import productReducer from "./ProductRedux";
import clientReducer from "./ClientRedux";

import storage from 'redux-persist/lib/storage'

import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
 } from 'redux-persist';

 const persistConfig = {
   key: 'root',
   version: 1,
   storage,
 };
 
 const rootReducer=combineReducers({user:userReducer,product:productReducer,client:clientReducer});
 const persistedReducer = persistReducer(persistConfig, rootReducer);
 

export const store = configureStore({
   reducer:persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export let persistor = persistStore(store);
