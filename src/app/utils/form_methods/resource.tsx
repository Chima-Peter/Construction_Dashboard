import { useAddContext } from "../../features/AddProject/page";

export function useHandleTextInput() {
   const { resource, setResource } = useAddContext()

   return (event: React.ChangeEvent<HTMLInputElement>) => {
      setResource({ ...resource, [event.target.name]: event.target.value })
      event.target.style.border = '1px solid lightgray'
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

 