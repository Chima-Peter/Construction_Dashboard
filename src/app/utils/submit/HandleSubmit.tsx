import { addProject } from "../../features/AddProject/AddProjectSlice"
import CheckBudget from "./CheckBudget"
import CheckProjectDetails from "./CheckProjectDetails"
import CheckResources from "./CheckResources"
import { useAppDispatch } from "../../redux/hooks"
import PrepareData from "./PrepareData"
import { BudgetProps, ProjectDetails, ResourceProps } from "../../redux/initialState"

export const useHandleSubmit = () => {
   const dispatch = useAppDispatch()
   
   return (event: React.FormEvent<HTMLFormElement>, projectDetails: ProjectDetails, resource: ResourceProps[], budget: BudgetProps, status: string) => {
      event.preventDefault()
      const form = event.currentTarget

      if (CheckProjectDetails(projectDetails)) {
            if (CheckResources(resource)) {
               if (CheckBudget(budget)) {
                  dispatch(addProject(PrepareData(projectDetails, resource, budget, status)))
                  form.reset()
               }
            }
         }
         else console.log('invalid')
   }
}
