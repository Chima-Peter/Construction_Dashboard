import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, ProjectProps } from "../../redux/initialState";


const AddProjectSlice = createSlice({
   name: "add",
   initialState: InitialState,
   reducers: {
      addProject: (state, action: PayloadAction<ProjectProps>) => {
         state.push(action.payload)
      }
   }
})

// export action creator
export const { addProject } = AddProjectSlice.actions

// export slice to be used in store
export default AddProjectSlice.reducer