import { ProjectDetails } from '../../redux/initialState'
import validator from 'validator'

export default function CheckProjectDetails(projectDetails: ProjectDetails) {
   let result = true

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
   else if ((projectDetails.keyDetails).length > 1) {
      projectDetails.keyDetails.map((item:any, index:any) => {
        if (validator.isEmpty(item)) {
         alert (`Detail ${index + 1} can't be empty`)
         result = false
        }
      })
   }
   else if ((projectDetails.milestones).length === 0) {
      alert ("Enter at least one milestone on this project.")
      result = false
   }
   else if ((projectDetails.milestones).length > 1) {
      projectDetails.milestones.map((item:any, index: any) => {
         if (validator.isEmpty(item)) {
            alert (`Milestone ${index + 1} can't be empty`)
            result = false
           }
      })
   }
   return result
}
