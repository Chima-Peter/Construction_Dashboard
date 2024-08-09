import { configureStore } from "@reduxjs/toolkit"
import ViewProjectReducer from "../features/ViewProject/ViewProjectSlice"

// Create our store using configureStore
export const store = configureStore({
   reducer: {
      view: ViewProjectReducer
   }
})

// Infer typeof for root state from store
export type RootState = ReturnType<typeof store.getState>

// infer type of dispatch from stop
export type AppDispatch = typeof store.dispatch