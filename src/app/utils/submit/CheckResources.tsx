import { ResourceProps } from '../../redux/initialState';
import validator from 'validator';

export default function CheckResources(resources: ResourceProps[]) {
   let result = true
   resources.map((_resource: any, index: number) => {
      if (validator.isEmpty(resources[index].name)) {
         alert (`Enter project name for Resource ${index}.`)
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
   })
   return result
}
