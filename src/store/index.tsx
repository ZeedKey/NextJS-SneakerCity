import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { fakeAPI } from './api'
import sessionReducer from './sessionReducer'

const rootReducer = combineReducers({
    sessionReducer,
    [fakeAPI.reducerPath]: fakeAPI.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fakeAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch