import { createSlice, createSelector, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface ProjectDetails {
   name: string,
   manager: string,
   progress: number
   startDate: string,
   endDate: string,
   keyDetails: string[],
   milestones: string[]
}

export interface ResourceProps {
   name: string
   units: number,
   quantity: string
}

export interface BudgetProps {
   resources: Pick<ResourceProps, 'name'|'units'>[],
   totalBudget: number,
   quantity: string
}

// Create type of slice in state
export interface ViewProjectProps {
   projectDetails: ProjectDetails,
   resources: ResourceProps[],
   budget: BudgetProps,
   status: 'completed' | 'in progress',
   id: string
}


// declare initial state
const initialState: ViewProjectProps[] = [
   {
      projectDetails: {
         name: "Downtown Office Tower",
         manager: "Mark Thompson",
         progress: 20,
         startDate: new Date("2024-01-15").toDateString(),
         endDate: new Date("2025-06-30").toDateString(),
         keyDetails: ["50-story skyscraper", "LEED Gold certification", "Smart building technology"],
         milestones: ["Groundbreaking", "Foundation", "Structure", "Facade", "Interior", "Final inspection"]
      },
      resources: [
         { name: "Construction Workers", units: 150, quantity: "people" },
         { name: "Steel", units: 5000, quantity: "tonnes" },
         { name: "Concrete", units: 20000, quantity: "cubic meters" },
         { name: "Electrical Cabling", units: 500, quantity: "kilometers" },
         { name: "HVAC Equipment", units: 120, quantity: "units" }
      ],
      budget: {
         resources: [
            { name: "Construction Workers", units: 7500000 },
            { name: "Steel", units: 4000000 },
            { name: "Concrete", units: 3500000 },
            { name: "Electrical Cabling", units: 1500000 },
            { name: "HVAC Equipment", units: 2000000 }
         ],
         totalBudget: 18500000,
         quantity: '₦'
      },
      status: "in progress",
      id: nanoid()
   },
   {
      projectDetails: {
         name: "Suburban Housing Development",
         manager: "Susan Lee",
         progress: 100,
         startDate: new Date("2024-02-10").toDateString(),
         endDate: new Date("2025-12-20").toDateString(),
         keyDetails: ["200 single-family homes", "Green spaces", "Community amenities"],
         milestones: ["Land acquisition", "Infrastructure", "House construction", "Landscaping", "Final inspection"]
      },
      resources: [
         { name: "Construction Workers", units: 200, quantity: "people" },
         { name: "Timber", units: 10000, quantity: "cubic meters" },
         { name: "Roofing Materials", units: 20000, quantity: "square meters" },
         { name: "Plumbing Equipment", units: 800, quantity: "units" },
         { name: "Landscaping Materials", units: 5000, quantity: "square meters" }
      ],
      budget: {
         resources: [
            { name: "Construction Workers", units: 10000000 },
            { name: "Timber", units: 2500000 },
            { name: "Roofing Materials", units: 1500000 },
            { name: "Plumbing Equipment", units: 2000000 },
            { name: "Landscaping Materials", units: 1000000 }
         ],
         totalBudget: 17500000,
         quantity: '₦'
      },
      status: "completed",
      id: nanoid()
   },
   {
      projectDetails: {
         name: "Highway Expansion Project",
         manager: "James Anderson",
         progress: 70,
         startDate: new Date("2023-09-01").toDateString(),
         endDate: new Date("2026-08-30").toDateString(),
         keyDetails: ["50 km highway expansion", "New bridges and tunnels", "Noise barriers"],
         milestones: ["Surveying", "Earthworks", "Paving", "Bridge construction", "Final inspection"]
      },
      resources: [
         { name: "Construction Workers", units: 300, quantity: "people" },
         { name: "Asphalt", units: 50000, quantity: "tonnes" },
         { name: "Steel", units: 10000, quantity: "tonnes" },
         { name: "Concrete", units: 50000, quantity: "cubic meters" },
         { name: "Heavy Machinery", units: 50, quantity: "units" }
      ],
      budget: {
         resources: [
            { name: "Construction Workers", units: 15000000 },
            { name: "Asphalt", units: 10000000 },
            { name: "Steel", units: 8000000 },
            { name: "Concrete", units: 9000000 },
            { name: "Heavy Machinery", units: 5000000 }
         ],
         totalBudget: 47000000,
         quantity: '₦'
      },
      status: "in progress",
      id: nanoid()
   },
   {
      projectDetails: {
         name: "Airport Terminal Renovation",
         manager: "Patricia Brown",
         progress: 100,
         startDate: new Date("2024-03-01").toDateString(),
         endDate: new Date("2025-09-30").toDateString(),
         keyDetails: ["Upgrade of Terminal 2", "Improved passenger flow", "Modern facilities"],
         milestones: ["Planning", "Demolition", "Reconstruction", "Systems upgrade", "Final inspection"]
      },
      resources: [
         { name: "Construction Workers", units: 120, quantity: "people" },
         { name: "Steel", units: 2000, quantity: "tonnes" },
         { name: "Concrete", units: 8000, quantity: "cubic meters" },
         { name: "Electrical Systems", units: 150, quantity: "units" },
         { name: "Interior Finishes", units: 30000, quantity: "square meters" }
      ],
      budget: {
         resources: [
            { name: "Construction Workers", units: 6000000 },
            { name: "Steel", units: 1600000 },
            { name: "Concrete", units: 2000000 },
            { name: "Electrical Systems", units: 1200000 },
            { name: "Interior Finishes", units: 3000000 }
         ],
         totalBudget: 13000000,
         quantity: '₦'
      },
      status: "completed",
      id: nanoid()
   },
   {
      projectDetails: {
         name: "Hospital Expansion",
         manager: "David Wilson",
         progress: 50,
         startDate: new Date("2024-05-01").toDateString(),
         endDate: new Date("2026-03-15").toDateString(),
         keyDetails: ["New surgical wing", "State-of-the-art equipment", "Expanded ICU"],
         milestones: ["Site preparation", "Foundation", "Superstructure", "Interior work", "Equipment installation", "Final inspection"]
      },
      resources: [
         { name: "Construction Workers", units: 180, quantity: "people" },
         { name: "Medical Equipment", units: 500, quantity: "units" },
         { name: "Concrete", units: 15000, quantity: "cubic meters" },
         { name: "Steel", units: 3000, quantity: "tonnes" },
         { name: "HVAC Systems", units: 50, quantity: "units" }
      ],
      budget: {
         resources: [
            { name: "Construction Workers", units: 9000000 },
            { name: "Medical Equipment", units: 10000000 },
            { name: "Concrete", units: 4000000 },
            { name: "Steel", units: 2400000 },
            { name: "HVAC Systems", units: 1500000 }
         ],
         totalBudget: 26000000,
         quantity: '₦'
      },
      status: "in progress",
      id: nanoid()
   }
]


const ViewProjectSlice = createSlice({
   name: "view",
   initialState,
   reducers: {

   }
})

// export slice to be used in store
export default ViewProjectSlice.reducer

export const selectCompleteProjects = createSelector(
   (state: RootState) => state.view, (view) => view.filter(project => project.status === 'completed')
)

export const selectWorkingProjects = createSelector(
   (state: RootState) => state.view, (view) => view.filter(project => project.status === 'in progress')
)

export const selectAllProjects = (state:RootState) => state.view

export const selectProjectById = createSelector(
   [selectAllProjects, (_state, projectId) => projectId], 
   (view, projectId) => view.find(project => project.id === projectId)
)