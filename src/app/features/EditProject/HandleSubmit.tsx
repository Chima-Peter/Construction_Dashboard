import { editProject } from "./EditProjectSlice"
import CheckBudget from "../../utils/submit/CheckBudget"
import CheckProjectDetails from "../../utils/submit/CheckProjectDetails"
import CheckResources from "../../utils/submit/CheckResources"
import { useAppDispatch } from "../../redux/hooks"
import PrepareData from "../../utils/submit/PrepareData"
import { BudgetProps, ProjectDetails, ResourceProps } from "../../redux/initialState"

export const useHandleSubmit = () => {
   const dispatch = useAppDispatch()
   
   return (projectDetails: ProjectDetails, resource: ResourceProps[], budget: BudgetProps, status: string, id:any) => {

      if (CheckProjectDetails(projectDetails)) {
            if (CheckResources(resource)) {
               if (CheckBudget(budget)) {
                  dispatch(editProject(PrepareData(projectDetails, resource, budget, status, id)))
                  return true
               }
            }
         }
         else return false
   }
}
