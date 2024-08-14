import { useAddContext } from "../page";

export function useHandleInput() {
   const { resource, setResource } = useAddContext()
   const regex = /^[0-9]*$/

   return (event: React.ChangeEvent<HTMLInputElement>, index:number) => {
      let temp = [...resource]
      let changeTemp = { ...temp[index] }
      let { name, value } = event.target;
      
      if (name === "units" || name === "spent") {
         if (regex.test(value)) changeTemp[name] = value
      } else if (name === "name" || name === "quantity") {
         changeTemp[name] = value
      }
      temp[index] = changeTemp
      setResource(temp)

      event.target.style.border = 'none'
      event.target.style.borderBottom = '2px solid lightgray'
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

 