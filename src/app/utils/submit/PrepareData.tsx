import { nanoid } from "@reduxjs/toolkit";
import { ProjectDetails, ResourceProps, BudgetProps, ProjectProps } from "../../redux/initialState";
import removeCommas from "../removeCommas";

export default function PrepareData (projectDetails: ProjectDetails, resources: ResourceProps[], budget: BudgetProps, status: string, projectId:any) {
   // const dispatch = useAppDispatch()
   const sumUsed = budget.resources.reduce((start, current) => {
      return start + Number(removeCommas(current.spent))
      }, 0)

   projectDetails.progress = ((Number(removeCommas(budget.totalBudget)) - sumUsed) / Number(removeCommas(budget.totalBudget))) * 100
   projectDetails.progress = Math.floor(projectDetails.progress)

   budget.quantity = '$'
   const submitData: ProjectProps = {
      projectDetails,
      resources,
      budget,
      id: projectId ?? nanoid(),
      status: status
   }
   return submitData
}