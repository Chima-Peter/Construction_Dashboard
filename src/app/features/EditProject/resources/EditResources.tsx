import { useHandleBlur, useHandleInput } from './edit_resource'
import { useEditContext } from '../page'

export default function EditResources() {
   const { resource,setResource } = useEditContext()
   const handleBlur = useHandleBlur()
   const handleInput = useHandleInput()
   

   const addNewResource = () => {
      // add new resource object to resource
      let tempResource = [...resource]
      tempResource.push({ name: '', units: '0', spent: '0', quantity: '' })
      setResource(tempResource)
   }

   const removeLastResource = (deleteIndex:number) => {
      // remove last resource object from resource
      let temp = [...resource.slice(0, deleteIndex), ...resource.slice(deleteIndex + 1)]
      setResource(temp)
   }

   return (
      <section className='flex w-[100%] pt-2 pb-6 px-4 lg:px-8 flex-col rounded-sm justify-between gap-2'>
         <h2 className="text-lg font-semibold mb-4">
            Resources Allocation
         </h2>
         <div className='flex flex-col gap-2'>
            {
               resource.map((_entry:any, index: any) => (
                  <div className='w-[100%] flex flex-wrap justify-between gap-y-4' key={index}>
                     <label htmlFor={`resource_name-${index}`} className="text-xs font-medium gap-0 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Resource {index + 1}
                        <input type="text" autoComplete="off" value={resource[index].name} onBlur={handleBlur} onChange={(event) => handleInput(event, index)} name="name" id={`resource_name-${index}`} className="capitalize w-[100%] px-4 py-2 border-b-2 border-b-gray-200 outline-none text-[13px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     <label htmlFor={`resource_spent-${index}`} className="text-xs font-medium gap-0 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Used Quantity
                        <input type="text" autoComplete="off" value={resource[index].spent} onBlur={handleBlur} onChange={(event) => handleInput(event, index)} name="spent" id={`resource_spent-${index}`} className="capitalize w-[100%] px-4 py-2 border-b-2 border-b-gray-200 outline-none text-[13px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     <label htmlFor={`resource_units-${index}`} className="text-xs font-medium gap-0 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Total Quantity
                        <input type="text" autoComplete="off" onWheel={() => {event?.preventDefault()}} value={resource[index].units} onBlur={handleBlur} onChange={(event) => handleInput(event, index)} name="units" id={`resource_units-${index}`} className="capitalize w-[100%] px-4 py-2 border-b-2 border-b-gray-200 outline-none text-[13px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     <label htmlFor={`resource_quantity-${index}`} className="text-xs font-medium gap-0 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Resource Measurement
                        <input type="text" autoComplete="off" value={resource[index].quantity} onBlur={handleBlur} onChange={(event) => handleInput(event, index)} name="quantity" id={`resource_quantity-${index}`} className="w-[100%] px-4 py-2 border-b-2 border-b-gray-200 outline-none text-[13px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     {
                        (resource.length > 1) && <div className='w-[100%] flex justify-end'>
                           <button type="button" className='text-xs py-2 px-4 bg-gray-300 w-[100px] rounded-sm font-medium tracking-wider' onClick={() => removeLastResource(index)}>
                              Remove
                           </button>
                        </div>
                     }
                  </div>
               ))
            }
         </div>
         <div className='w-[100%] mt-1'>
            <button type="button" className='text-xs py-2 px-4 bg-gray-300 rounded-sm font-medium w-[100px] tracking-wider' onClick={addNewResource}>
               Add
            </button>
         </div>
      </section>
   )
}
