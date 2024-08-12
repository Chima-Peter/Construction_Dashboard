import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { InitialState, ProjectProps } from "../../redux/initialState";
import { addProject } from "../AddProject/AddProjectSlice";


const ViewProjectSlice = createSlice({
   name: "view",
   initialState: InitialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(addProject, (state, action: PayloadAction<ProjectProps>) => {
         console.log('adding project to view slice')
         state.push(action.payload)
      })
   }
})

// export slice to be used in store
export default ViewProjectSlice.reducer

export const selectCompleteProjects = createSelector(
   (state: RootState) => state.view, (view) => view.filter((project:any) => project.status === 'complete')
)

export const selectWorkingProjects = createSelector(
   (state: RootState) => state.view, (view) => view.filter((project:any) => project.status === 'in progress')
)

export const selectPausedProjects = createSelector(
   (state: RootState) => state.view, (view) => view.filter((project:any) => project.status === 'paused')
)

export const selectCancelledProjects = createSelector(
   (state: RootState) => state.view, (view) => view.filter((project:any) => project.status === 'cancelled')
)

export const selectPlannedProjects = createSelector(
   (state: RootState) => state.view, (view) => view.filter((project:any) => project.status === 'planning')
)

export const selectNearCompletionProjects = createSelector(
   (state: RootState) => state.view, (view) => view.filter((project:any) => project.status === 'near completion')
)

export const selectNotStartedrojects = createSelector(
   (state: RootState) => state.view, (view) => view.filter((project:any) => project.status === 'not started')
)

export const selectAllProjects = (state:RootState) => state.view

export const selectProjectById = createSelector(
   [selectAllProjects, (_state, projectId) => projectId], 
   (view, projectId) => view.find((project:any) => project.id === projectId)
)