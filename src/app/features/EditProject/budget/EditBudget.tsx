import { useHandleInput, useHandleResourceInput } from './edit_budget'
import { useHandleBlur } from '../projectDetails/edit_project'
import { useEditContext } from '../page'

export default function EditBudget() {
   const { budget, setBudget } = useEditContext()
   const handleBlur = useHandleBlur()
   const handleInput = useHandleInput()
   const handleResourceInput = useHandleResourceInput()
   

   const addNewResource = () => {
      // add new resource object to budget
      let tempResource = {...budget}
      let newTemp = tempResource.resources
      newTemp.push({name: '', units: '0', spent: '0'})
      tempResource.resources = newTemp
      setBudget(tempResource)

   }

   const removeLastResource = (deleteIndex:number) => {
      // remove last resource object from resource
      let temp = {...budget}
      let changeTemp = [...temp.resources.slice(0, deleteIndex), ...temp.resources.slice(deleteIndex + 1)]
      temp.resources = changeTemp
      setBudget(temp)
   }

   return (
      <section className='flex w-[100%] px-2 pt-2 pb-6 md:px-4 lg:px-8 flex-col rounded-sm justify-between gap-2'>
         <h2 className="text-lg font-semibold mb-4">
            Budget Allocation
         </h2>
         <div className='flex flex-col gap-2'>
            {
               budget.resources.map((_entry:any, index: any) => (
                  <div className='w-[100%] flex flex-wrap justify-between gap-y-4' key={index}>
                     <label htmlFor={`budget_name-${index}`} className="text-xs font-medium gap-0 w-[100%] md:w-[32%] flex-wrap flex flex-col"> Resource {index + 1}
                        <input type="text" autoComplete="off" value={budget.resources[index].name} onBlur={handleBlur} onChange={(event) => handleResourceInput(event, index)} name="name" id={`budget_name-${index}`} className="capitalize w-[100%] px-4 py-2  border-b-2 border-b-gray-200 outline-none text-[13px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     <label htmlFor={`budget_spent-${index}`} className="text-xs font-medium gap-0 w-[100%] md:w-[32%] flex-wrap flex flex-col"> Amount Used
                        <input type="number" autoComplete="off" value={budget.resources[index].spent} onBlur={handleBlur} onChange={(event) => handleResourceInput(event, index)} name="spent" id={`budget_spent-${index}`} className="capitalize w-[100%] px-4 py-2  border-b-2 border-b-gray-200 outline-none text-[13px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     <label htmlFor={`budget_units-${index}`} className="text-xs font-medium gap-0 w-[100%] md:w-[32%] flex-wrap flex flex-col"> Allocated Budget
                        <input type="number" autoComplete="off" value={budget.resources[index].units} onBlur={handleBlur} onChange={(event) => handleResourceInput(event, index)} name="units" id={`budget_units-${index}`} className="capitalize w-[100%] px-4 py-2  border-b-2 border-b-gray-200 outline-none text-[13px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
                     </label>
                     {
                        (budget.resources.length > 1) && <div className='w-[100%] flex justify-end'>
                           <button type="button" className='text-xs py-2 px-4 bg-gray-300 rounded-sm font-medium tracking-wider w-[100px]' onClick={() => removeLastResource(index)}>
                              Remove
                           </button>
                        </div>
                     }
                  </div>
               ))
            }
            <label htmlFor='total' className="text-xs font-medium gap-0 w-[100%] md:w-[200px] flex-wrap flex flex-col"> Project's Total Budget
               <input type="number" autoComplete="off" onWheel={() => {event?.preventDefault()}} value={budget.totalBudget} onBlur={handleBlur} onChange={handleInput} name="total" id='total' className="capitalize w-[100%] px-4 py-2  border-b-2 border-b-gray-200 outline-none text-[13px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
         </div>
         <div className='w-[100%] mt-1'>
            <button type="button" className='text-xs py-2 px-4 bg-gray-300 rounded-sm font-medium tracking-wider w-[100px]' onClick={addNewResource}>
               Add
            </button>
         </div>
      </section>
   )
}
