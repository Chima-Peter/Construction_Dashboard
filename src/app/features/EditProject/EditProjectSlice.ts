import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, ProjectProps } from "../../redux/initialState";
import { addProject } from "../AddProject/AddProjectSlice";


const EditSlice = createSlice({
   name: 'edit',
   initialState: InitialState,
   reducers: {
      editProject: (state, action: PayloadAction<ProjectProps>) => {
         state.map((item) => {
            if (item.id === action.payload.id)
               item = action.payload
         })
      }
   },
   extraReducers: (builder) => {
      builder.addCase(addProject, (state, action: PayloadAction<ProjectProps>) => {
         console.log('adding to edit slice')
         state.push(action.payload)
      })
   }
}) 

export const { editProject } = EditSlice.actions

export default EditSlice.reducer