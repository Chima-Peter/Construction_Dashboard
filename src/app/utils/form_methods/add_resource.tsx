import { useAddContext } from "../../features/AddProject/page";

export function useHandleTextInput() {
   const { resource, setResource } = useAddContext()

   return (event: React.ChangeEvent<HTMLInputElement>, index:number) => {
      let temp = [...resource]
      let changeTemp = { ...temp[index] }
      const { name, value } = event.target;
      
      if (name === "units" || name === "spent") {
         changeTemp[name] = Number(value)
      } else if (name === "name" || name === "quantity") {
         changeTemp[name] = value
      }
      temp[index] = changeTemp
      setResource(temp)
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

 