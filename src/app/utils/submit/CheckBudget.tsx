import { BudgetProps } from '../../redux/initialState';
import validator from 'validator';

export default function CheckBudget(budget: BudgetProps) {
  let result = true
  let resources = budget.resources

   resources.map((_resource: any, index: any) => {
      if (validator.isEmpty(resources[index].name)) {
         alert (`Enter project name for Resource ${index}.`)
         result = false
      }
      else if (validator.isEmpty(resources[index].spent)) {
         alert (`Amount spent for ${resources[index].name} should be 0 or something else.`)
         result = false
      }
      else if (resources[index].units === '0') {
            alert (`Budget for ${resources[index].name} can't be 0`)
            result = false
      }
      if (Number(resources[index].spent) > Number(resources[index].units)) {
         alert (`Amount spent for Resource ${resources[index].name ?? index} cannot be more than the amount allocated.`)
         result = false
      }
   })

   if (result) {
      if (budget.totalBudget === '0') {
         alert ("Total budget can't be 0")
         result = false
      }
   }
   return result
}
