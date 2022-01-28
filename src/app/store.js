import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/lib/persistReducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const userPersistReducer = persistReducer(persistConfig,userReducer)

export const store = configureStore({
  reducer: {
      user: userPersistReducer
  },

})