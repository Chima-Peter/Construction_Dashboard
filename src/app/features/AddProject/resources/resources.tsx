import { useHandleBlur, useHandleTextInput } from '../../../utils/form_methods/add_project'
import { useAddContext } from '../page'

export default function AddResources() {
   const { formRef, resource } = useAddContext()
   const handleBlur = useHandleBlur()
   const handleTextInput = useHandleTextInput()

   return (
      <section className='flex w-[100%] gap-4 px-2 pt-4 pb-6 md:px-4 lg:px-8 flex-col rounded-sm justify-between'>
         <h2 className="text-lg font-semibold mb-2">
            Resources Allocation
         </h2>
         <div className='w-[100%] flex flex-wrap justify-between gap-y-4'>
            <label htmlFor="name" className="text-xs font-medium gap-1 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Resource
               <input type="text" autoComplete="off" value={resource.name} ref={(el) => (formRef.current[4] = el)} onBlur={handleBlur} onChange={handleTextInput} name="name" id="name" className="capitalize w-[100%] px-4 py-2 rounded-md border border-gray-200 outline-none text-[16px] focus:shadow-md placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
            <label htmlFor="spent" className="text-xs font-medium gap-1 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Quantity Spent
               <input type="text" autoComplete="off" ref={(el) => (formRef.current[5] = el)} value={resource.spent} onBlur={handleBlur} onChange={handleTextInput} name="spent" id="spent" className="capitalize w-[100%] px-4 py-2 rounded-md border border-gray-200 outline-none text-[16px] focus:shadow-md placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
            <label htmlFor="units" className="text-xs font-medium gap-1 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Total Quantity
               <input type="number" autoComplete="off" onWheel={() => {event?.preventDefault()}} value={resource.units} ref={(el) => (formRef.current[6] = el)} onBlur={handleBlur} onChange={handleTextInput} name="units" id="units" className="capitalize w-[100%] px-4 py-2 rounded-md border border-gray-200 outline-none text-[16px] focus:shadow-md placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
            <label htmlFor="quantity" className="text-xs font-medium gap-1 w-[100%] md:w-[48%] lg:w-[23%] flex-wrap flex flex-col"> Resource Measurement
               <input type="text" autoComplete="off" value={resource.quantity} ref={(el) => (formRef.current[7] = el)} onBlur={handleBlur} onChange={handleTextInput} name="quantity" id="quantity" className="capitalize w-[100%] px-4 py-2 rounded-md border border-gray-200 outline-none text-[16px] focus:shadow-md placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
         </div>
      </section>
   )
}
