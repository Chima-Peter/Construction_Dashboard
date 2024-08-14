import { BudgetProps, ProjectDetails, ResourceProps } from "../../../redux/initialState";
import CheckBudget from "./CheckBudget";
import CheckProjectDetails from "./CheckProjectDetails";
import CheckResources from "./CheckResources";
import { useAppDispatch } from "../../../redux/hooks";
import { addProject } from "../AddProjectSlice";
import Prepare from "../../../utils/prepareSubmit";

export default function handleSubmit(event:React.FormEvent<HTMLFormElement>, projectDetails: ProjectDetails, resources: ResourceProps[], budget: BudgetProps, status: string) {
   const dispatch = useAppDispatch()

  event.preventDefault()
  if (CheckProjectDetails(projectDetails)) {
      if (CheckResources(resources)) {
         if (CheckBudget(budget)) {
            dispatch(addProject(Prepare(projectDetails, resources, budget, status)))
         }
      }
  }
  else console.log('invalid')
}