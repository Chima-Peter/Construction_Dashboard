import { useAddContext } from "../page"

export const useHandleResourceInput = () => {
   const { budget, setBudget } = useAddContext()

   return (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { value, name } = event.target
      const regex = /^[0-9]*$/
      let temp = { ...budget }
      let changeResource = temp.resources[index]
      
      if (name === "name")
         changeResource[name] = value
      else if (name === "units" || name === "spent")
         if (regex.test(value)) changeResource[name] = value

      temp.resources[index] = changeResource
      setBudget(temp)
   }
}

export const useHandleInput = () => {
   const { budget, setBudget } = useAddContext()
   const regex = /^[0-9]*$/

   return (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      let temp = { ...budget }
      
      if (regex.test(value)) temp.totalBudget = value;

      setBudget(temp)
   }
}