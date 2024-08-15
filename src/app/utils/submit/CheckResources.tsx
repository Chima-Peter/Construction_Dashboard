import { ResourceProps } from '../../redux/initialState';
import validator from 'validator';

export default function CheckResources(resources: ResourceProps[]) {
   let result = true
   resources.map((_resource: any, index: number) => {
      if (validator.isEmpty(resources[index].name)) {
         alert (`Enter project name for Resource ${index}.`)
         result = false
      }
      else if (validator.isEmpty(resources[index].spent)) {
         alert (`Spent resources for ${resources[index].name} should be 0 or something else.`)
         result = false
      }
      else if (resources[index].units === '0') {
            alert (`Budget for ${resources[index].name} can't be 0`)
            result = false
      }
      else if (validator.isEmpty(resources[index].quantity)) {
         alert (`Enter unit of measurement for ${resources[index].name}.`)
         result = false
      }
      if (Number(resources[index].spent) > Number(resources[index].units)) {
         alert (`Resources spent for Resource ${resources[index].name ?? index} cannot be more than the amount allocated.`)
         result = false
      }
   })
   return result
}
