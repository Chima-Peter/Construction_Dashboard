import { useAddContext } from "../page";

export function useHandleInput() {
   // Can use the addContext because we're calling the fucntional component inside a descendant of the context
   const { projectDetails, setProjectDetails } = useAddContext()

   return (event: React.ChangeEvent<HTMLInputElement>) => {
      setProjectDetails({ ...projectDetails, [event.target.name]: event.target.value })
      event.target.style.border = '1px solid lightgray'
   }
 };
 
 export function useHandleSelectInput() {
   const { setStatus } = useAddContext()

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

 // if (formRef.current) {
   //    formRef.current.map((_item: any, index: any) => {
   //       if (formRef.current[index]?.value == '') {
            //       formRef.current[index].style.border = '2px solid red'
            //       formRef.current[index]?.placeholder = 'This field is required'
            // }
   //    })
   // }

 