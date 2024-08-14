import { useHandleSelectInput, useHandleInput, useHandleBlur } from "./add_project"
import { useAddContext } from "../page"
import { projectStatuses } from "../../../redux/initialState"

export default function AddProjectDetails() {
   const { status, projectDetails } = useAddContext()
   const handleInput = useHandleInput()
   const handleBlur = useHandleBlur()
   const handleSelectInput = useHandleSelectInput()
   
   

   return (
      <section className="px-2 pt-4 pb-6 md:px-4 lg:px-8 rounded-sm w-[100%] flex flex-col gap-4">
         <h1 className="text-lg font-semibold">
            Project Details
         </h1>
         <div className="flex w-[100%] gap-4 md:gap-0 md:gap-y-4 justify-normal md:justify-between flex-wrap">
            <label htmlFor="name" className="text-xs font-medium gap-1 w-[100%] md:w-[48%] flex flex-col"> Project Name
               <input autoFocus type="text" autoComplete="off" onBlur={handleBlur} value={projectDetails?.name} onChange={handleInput} name="name" id="name" className="w-[100%] capitalize px-4 py-2 rounded-md border-b-2 border-b-gray-200 outline-none text-[16px] focus:shadow-lg placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
            <label htmlFor="manager" className="text-xs font-medium gap-1 w-[100%] md:w-[48%] flex flex-col"> Project Manager
               <input type="text" autoComplete="off" onBlur={handleBlur} value={projectDetails?.manager} onChange={handleInput} name="manager" id="manager" className="capitalize w-[100%] px-4 py-2 rounded-md border-b-2 border-b-gray-200 outline-none text-[16px] focus:shadow-lg placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
            <div className="w-[100%] flex gap-y-4 mt-3 justify-between items-center flex-wrap md:flex-nowrap">
               <label htmlFor="status" className="text-xs font-medium gap-1 w-[100%] md:w-[32%] flex flex-col"> Project Status
                  <select name="status" id="status" className="w-[100%] px-4 py-2 rounded-md border-b border-b-gray-200 outline-none text-[12px] focus:shadow-lg placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case capitalize" onChange={handleSelectInput} onBlur={handleSelectInput} value={status}>
                     {
                        projectStatuses.map((item: any) => (
                           <option key={item} value={item} >
                              {item}
                           </option>
                        ))
                     }
                  </select>
               </label>
               <label htmlFor="startDate" className="text-xs font-medium gap-1 w-[48%] md:w-[32%] flex flex-col mt-2 md:mt-0"> Start Date
                  <input type="date" autoComplete="off" onChange={handleInput}  onBlur={handleBlur} value={projectDetails.startDate} max={projectDetails.endDate} name="startDate" id="startDate" className="w-[100%] px-4 py-2 rounded-md border-b-2 border-b-gray-200 outline-none text-[12px] appearance-none focus:shadow-lg placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
               </label>
               <label htmlFor="endDate" className="text-xs font-medium gap-1 w-[48%] md:w-[32%] flex flex-col mt-2 md:mt-0"> Proposed Due Date
                  <input type="date" autoComplete="off" onChange={handleInput}  onBlur={handleBlur} min={projectDetails.startDate} value={projectDetails.endDate} name="endDate" id="endDate" className="w-[100%] px-4 py-2 rounded-md border-b-2 border-b-gray-200 outline-none text-[12px] appearance-none focus:shadow-lg placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
               </label>
            </div>
         </div>
      </section>
   )
}
