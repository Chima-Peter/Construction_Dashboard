import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, ProjectProps } from "../../redux/initialState";
import { addProject } from "../AddProject/AddProjectSlice";


const EditSlice = createSlice({
   name: 'edit',
   initialState: InitialState,
   reducers: {
      editProject: (state, action: PayloadAction<ProjectProps>) => {
         state.forEach((item: any, index: any) => {
            if (item.id.toLowerCase() === action.payload.id.toLowerCase()) {
               state[index] = action.payload;
            }
         })
      }
   },
   extraReducers: (builder) => {
      builder.addCase(addProject, (state, action: PayloadAction<ProjectProps>) => {
         state.push(action.payload)
      })
   }
}) 

export const { editProject } = EditSlice.actions

export default EditSlice.reducer