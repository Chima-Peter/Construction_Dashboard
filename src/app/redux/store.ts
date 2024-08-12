import { configureStore } from "@reduxjs/toolkit"
import ViewProjectReducer from "../features/ViewProject/ViewProjectSlice"
import AddProjectReducer from "../features/AddProject/AddProjectSlice"

// Create our store using configureStore
export const store = configureStore({
   reducer: {
      view: ViewProjectReducer,
      add: AddProjectReducer
   }
})

// Infer typeof for root state from store
export type RootState = ReturnType<typeof store.getState>

// infer type of dispatch from stop
export type AppDispatch = typeof store.dispatch