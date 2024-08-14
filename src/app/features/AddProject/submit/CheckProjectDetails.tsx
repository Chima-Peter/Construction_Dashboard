import { ProjectDetails } from '../../../redux/initialState'
import validator from 'validator'

export default function CheckProjectDetails(projectDetails: ProjectDetails) {
   if (validator.isEmpty(projectDetails.name)) {
      alert ("Project name field shouldn't be empty.")
      return false
   }
   else if (validator.isEmpty(projectDetails.manager)) {
      alert ("Project manager field shouldn't be empty.")
      return false
   }
   else if (validator.isEmpty(projectDetails.startDate)) {
      alert ("Choose project start date.")
      return false
   }
   else if (validator.isEmpty(projectDetails.endDate)) {
      alert ("Choose project's proposed due date.")
      return false
   }
   else if (validator.isEmpty(projectDetails.endDate)) {
      alert ("Choose project's proposed due date.")
      return false
   }
   else if ((projectDetails.keyDetails).length === 0) {
      alert ("Enter at least one key detail about this project.")
      return false
   }
   else if ((projectDetails.milestones).length === 0) {
      alert ("Enter at least one milestone on this project.")
      return false
   }
   else return true
}
