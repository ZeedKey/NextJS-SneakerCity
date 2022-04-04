import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sessionReducer from './sessionReducer'

const rootReducer = combineReducers({
    sessionReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch