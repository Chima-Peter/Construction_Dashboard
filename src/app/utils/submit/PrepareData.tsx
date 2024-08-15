import { nanoid } from "@reduxjs/toolkit";
import { ProjectDetails, ResourceProps, BudgetProps, ProjectProps } from "../../redux/initialState";

export default function PrepareData (projectDetails: ProjectDetails, resources: ResourceProps[], budget: BudgetProps, status: string) {
   // const dispatch = useAppDispatch()
   const sumUsed = budget.resources.reduce((start, current) => {
      return start + Number(current.spent)
      }, 0)

   projectDetails.progress = ((Number(budget.totalBudget) - sumUsed) / Number(budget.totalBudget)) * 100
   
   const submitData: ProjectProps = {
      projectDetails,
      resources,
      budget,
      id: nanoid(),
      status: status
   }
   console.log(submitData)

   return submitData
}