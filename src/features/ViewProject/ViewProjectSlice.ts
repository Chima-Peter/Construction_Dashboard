import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ProjectDetails {
   name: string,
   manager: string,
   startDate: string,
   endDate: string,
   keyDetails: string[],
   milestones: string[]
}

export interface Resources {
   name: string
   units: number,
   quantity: string
}

export interface Budget {
   resources: Resources[],
   totalBudget: string
}

// Create type of slice in state
export interface ViewProjectProps {
   projectDetails: ProjectDetails,
   resources: Resources[],
   budget: Budget,
   status: 'completed' | 'in progress'
}


// declare initial state
const initialState: ViewProjectProps[] = [
   {
      projectDetails: {
         name: "Downtown Office Tower",
         manager: "Mark Thompson",
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
            { name: "Construction Workers", units: 7500000, quantity: "$" },
            { name: "Steel", units: 4000000, quantity: "$" },
            { name: "Concrete", units: 3500000, quantity: "$" },
            { name: "Electrical Cabling", units: 1500000, quantity: "$" },
            { name: "HVAC Equipment", units: 2000000, quantity: "$" }
         ],
         totalBudget: "$18,500,000"
      },
      status: "completed"
   },
   {
      projectDetails: {
         name: "Suburban Housing Development",
         manager: "Susan Lee",
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
            { name: "Construction Workers", units: 10000000, quantity: "$" },
            { name: "Timber", units: 2500000, quantity: "$" },
            { name: "Roofing Materials", units: 1500000, quantity: "$" },
            { name: "Plumbing Equipment", units: 2000000, quantity: "$" },
            { name: "Landscaping Materials", units: 1000000, quantity: "$" }
         ],
         totalBudget: "$17,500,000"
      },
      status: "completed"
   },
   {
      projectDetails: {
         name: "Highway Expansion Project",
         manager: "James Anderson",
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
            { name: "Construction Workers", units: 15000000, quantity: "$" },
            { name: "Asphalt", units: 10000000, quantity: "$" },
            { name: "Steel", units: 8000000, quantity: "$" },
            { name: "Concrete", units: 9000000, quantity: "$" },
            { name: "Heavy Machinery", units: 5000000, quantity: "$" }
         ],
         totalBudget: "$47,000,000"
      },
      status: "in progress"
   },
   {
      projectDetails: {
         name: "Airport Terminal Renovation",
         manager: "Patricia Brown",
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
            { name: "Construction Workers", units: 6000000, quantity: "$" },
            { name: "Steel", units: 1600000, quantity: "$" },
            { name: "Concrete", units: 2000000, quantity: "$" },
            { name: "Electrical Systems", units: 1200000, quantity: "$" },
            { name: "Interior Finishes", units: 3000000, quantity: "$" }
         ],
         totalBudget: "$13,000,000"
      },
      status: "completed"
   },
   {
      projectDetails: {
         name: "Hospital Expansion",
         manager: "David Wilson",
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
            { name: "Construction Workers", units: 9000000, quantity: "$" },
            { name: "Medical Equipment", units: 10000000, quantity: "$" },
            { name: "Concrete", units: 4000000, quantity: "$" },
            { name: "Steel", units: 2400000, quantity: "$" },
            { name: "HVAC Systems", units: 1500000, quantity: "$" }
         ],
         totalBudget: "$26,000,000"
      },
      status: "in progress"
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

export const selectAllProjectDetails = createSelector(
   (state: RootState) => state.view, (view) => view.map(project => project.projectDetails)
)

export const selectAllResources = createSelector(
   (state: RootState) => state.view, (view) => view.map(project => project.resources)
)

export const selectAllBudgets = createSelector(
   (state: RootState) => state.view, (view) => view.map(project => project.budget)
)

console.log(selectAllProjectDetails)