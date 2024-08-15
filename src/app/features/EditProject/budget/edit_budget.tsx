import { useEditContext } from "../page"

export const useHandleResourceInput = () => {
   const { budget, setBudget } = useEditContext()

   return (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { value, name } = event.target
      const regex = /^[0-9]*$/
      let temp = { ...budget }
      let changeResource = temp.resources[index]

      event.target.style.border = 'none'
      event.target.style.borderBottom = '2px solid lightgray'

      if (name === "name")
         changeResource[name] = value
      else if (name === "units" || name === "spent")
         if (regex.test(value)) changeResource[name] = value

      temp.resources[index] = changeResource
      setBudget(temp)
   }
}

export const useHandleInput = () => {
   const { budget, setBudget } = useEditContext()
   const regex = /^[0-9]*$/

   return (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      let temp = { ...budget }

      event.target.style.border = 'none'
      event.target.style.borderBottom = '2px solid lightgray'

      if (regex.test(value)) temp.totalBudget = value;

      setBudget(temp)
   }
}