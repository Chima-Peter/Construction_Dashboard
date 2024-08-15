import numberWithCommas from "../../../utils/numberWithCommas"
import removeCommas from "../../../utils/removeCommas"
import { useAddContext } from "../page"

export const useHandleResourceInput = () => {
   const { budget, setBudget } = useAddContext()

   return (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      let { value, name } = event.target
      const regex = /^[0-9]*$/
      let temp = { ...budget }
      let changeResource = temp.resources[index]

      event.target.style.border = 'none'
      event.target.style.borderBottom = '2px solid lightgray'

      if (name === "name")
         changeResource[name] = value

      else if (name === "units" || name === "spent") {
         value = removeCommas(value)
         if (regex.test(value)) {
            changeResource[name] = numberWithCommas(Number(value))
            const sumUsed = budget.resources.reduce((start, current) => {
               return start + Number(removeCommas(current.units))
            }, 0)
            temp.totalBudget =  numberWithCommas(sumUsed)
         }
      }
      

      temp.resources[index] = changeResource
      setBudget(temp)
   }
}