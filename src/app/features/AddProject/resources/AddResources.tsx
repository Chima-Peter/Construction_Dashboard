import { useState } from 'react';
import { useHandleBlur, useHandleTextInput } from '../../../utils/form_methods/add_resource'
import { useAddContext } from '../page'

export default function AddResources() {
   const { resource,setResource } = useAddContext()
   const handleBlur = useHandleBlur()
   const handleTextInput = useHandleTextInput()
   const [resourceArray, setResourceArray] = useState([0])

   const addNewResource = () => {
      // add new resource object to resource
      let tempResource = [...resource]
      tempResource.push({ name: '', units: 0, spent: 0, quantity: '' })
      setResource(tempResource)

      // add new index to resource array
      let temp = [...resourceArray]
      temp.push(1)
      setResourceArray(temp)
   }

   const removeLastResource = (deleteIndex:number) => {
      // remove last resource object from resource
      let temp = [...resource.slice(0, deleteIndex), ...resource.slice(deleteIndex + 1)]
      setResource(temp)

      // remove select index from resource array
      let newTemp = [...resourceArray.slice(0, deleteIndex), ...resourceArray.slice(deleteIndex + 1)]
      setResourceArray(newTemp)
      
      
   }

   return (
      <section className='flex w-[100%] gap-4 px-2 pt-4 pb-6 md:px-4 lg:px-8 flex-col rounded-sm justify-between'>
         <h2 className="text-lg font-semibold mb-2">
            Resources Allocation
         </h2>
         <div className='flex flex-col gap-6'>
            {
               resourceArray.map((entry:any, index: any) => (
                  <div className='w-[100%] flex flex-wrap justify-between gap-y-4' key={`${resource[index].name}-${entry}`}>
                     <label htmlFor={`name-${index}`} className="text-xs font-medium gap-1 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Resource {index + 1}
                        <input type="text" autoComplete="off" value={resource[index].name} onBlur={handleBlur} onChange={(event) => handleTextInput(event, index)} name="name" id={`name-${index}`} className="capitalize w-[100%] px-4 py-2 rounded-md border border-gray-200 outline-none text-[16px] focus:shadow-md placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     <label htmlFor={`spent-${index}`} className="text-xs font-medium gap-1 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Quantity Spent
                        <input type="number" autoComplete="off" value={resource[index].spent} onBlur={handleBlur} onChange={(event) => handleTextInput(event, index)} name="spent" id={`spent-${index}`} className="capitalize w-[100%] px-4 py-2 rounded-md border border-gray-200 outline-none text-[16px] focus:shadow-md placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     <label htmlFor={`units-${index}`} className="text-xs font-medium gap-1 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Total Quantity
                        <input type="number" autoComplete="off" onWheel={() => {event?.preventDefault()}} value={resource[index].units} onBlur={handleBlur} onChange={(event) => handleTextInput(event, index)} name="units" id={`units-${index}`} className="capitalize w-[100%] px-4 py-2 rounded-md border border-gray-200 outline-none text-[16px] focus:shadow-md placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     <label htmlFor={`quantity-${index}`} className="text-xs font-medium gap-1 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Resource Measurement
                        <input type="text" autoComplete="off" value={resource[index].quantity} onBlur={handleBlur} onChange={(event) => handleTextInput(event, index)} name="quantity" id={`quantity-${index}`} className="w-[100%] px-4 py-2 rounded-md border border-gray-200 outline-none text-[16px] focus:shadow-md placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     <div className='w-[100%] flex justify-end translate-y-[-10px]'>
                        <button type="button" className='text-xs py-2 px-4 bg-gray-300 rounded-sm font-medium tracking-wider' onClick={() => removeLastResource(index)}>
                           Remove
                        </button>
                     </div>
                  </div>
               ))
            }
         </div>
         <div className='w-[100%]'>
            <button type="button" className='text-xs py-2 px-4 bg-gray-300 rounded-sm font-medium tracking-wider' onClick={addNewResource}>
               Add
            </button>
         </div>
      </section>
   )
}
