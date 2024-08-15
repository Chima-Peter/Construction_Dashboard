import { useEditContext } from "../page"

export function useHandleInput() {
   // Can use the addContext because we're calling the fucntional component inside a descendant of the context
   const { projectDetails, setProjectDetails } = useEditContext()

   return (event: React.ChangeEvent<HTMLInputElement>) => {
      setProjectDetails({ ...projectDetails, [event.target.name]: event.target.value })
      event.target.style.border = 'none'
      event.target.style.borderBottom = '2px solid lightgray'
   }
 };
 
 export function useHandleSelectInput() {
   const { setStatus } = useEditContext()

   return (event: React.ChangeEvent<HTMLSelectElement>) => {
      setStatus(event.target.value)
   }
 };
 
 export function useHandleBlur() {
   return (event: React.FocusEvent<HTMLInputElement>) => {
      if (event.target.value === '') {
      event.target.style.border = '2px solid red';
      event.target.placeholder = 'This field is required.';
      }
   }
 }

 export function useHandleSelectBlur() {
   return (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (event.target.value === '') {
         event.target.style.border = '1px solid red';
       }
   }
 }

 export const useHandleMilestone = () => {
   const { projectDetails, setProjectDetails } = useEditContext()

   return (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { value } = event.target
      let temp = { ...projectDetails }
      temp.milestones[index] = value

      event.target.style.border = 'none'
      event.target.style.borderBottom = '2px solid lightgray'

      setProjectDetails(temp)
   }
}

export const useHandleKeyDetails = () => {
   const { projectDetails, setProjectDetails } = useEditContext()

   return (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { value } = event.target
      let temp = { ...projectDetails }
      temp.keyDetails[index] = value

      event.target.style.border = 'none'
      event.target.style.borderBottom = '2px solid lightgray'

      setProjectDetails(temp)
   }
}