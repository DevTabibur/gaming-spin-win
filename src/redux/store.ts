import { configureStore } from '@reduxjs/toolkit'
import { baseAPI } from './api/baseApi'
import { reducer } from './rootReducer'

//!==========================================================>>>

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
