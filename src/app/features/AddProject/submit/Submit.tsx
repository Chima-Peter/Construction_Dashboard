import { BudgetProps, ProjectDetails, ResourceProps } from "../../../redux/initialState";
import CheckBudget from "./CheckBudget";
import CheckProjectDetails from "./CheckProjectDetails";
import CheckResources from "./CheckResources";

export default function handleSubmit(event:React.FormEvent<HTMLFormElement>, projectDetails: ProjectDetails, resources: ResourceProps[], budget: BudgetProps) {
  event.preventDefault()
  if (CheckProjectDetails(projectDetails)) {
      if (CheckResources(resources)) {
         if (CheckBudget(budget)) {
            console.log('correct')
         }
      }
  }
  else console.log('invalid')
}