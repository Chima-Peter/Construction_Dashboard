import { nanoid } from "@reduxjs/toolkit";
import { ProjectDetails, ResourceProps, BudgetProps, ProjectProps } from "../redux/initialState";

export default function Prepare (projectDetails: ProjectDetails, resources: ResourceProps[], budget: BudgetProps, status: string) {
   const sumUsed = budget.resources.reduce((start, current) => {
      return start + Number(current.spent)
      }, 0)

   projectDetails.progress = (sumUsed / Number(budget.totalBudget)) * 100
   
   const submitData: ProjectProps = {
      projectDetails,
      resources,
      budget,
      id: nanoid(),
      status: status
   }
   return submitData
}