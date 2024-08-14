import { useHandleSelectInput, useHandleInput, useHandleBlur, useHandleMilestone, useHandleKeyDetails } from "./add_project"
import { useAddContext } from "../page"
import { projectStatuses } from "../../../redux/initialState"
import { useState } from "react"
import { MdCancel } from "react-icons/md";

export default function AddProjectDetails() {
   const { status, projectDetails, setProjectDetails } = useAddContext()
   const handleInput = useHandleInput()
   const handleBlur = useHandleBlur()
   const handleSelectInput = useHandleSelectInput()
   const handleMilestone = useHandleMilestone()
   const handleKeyDetail = useHandleKeyDetails()
   const [ milestoneArray, setMileStone ] = useState([0])
   const [ keyDetailsArray, setKeyDetails ] = useState([0])

   const addNewMilestone = () => {
      let tempResource = {...projectDetails}
      let newTemp = tempResource.milestones
      newTemp.push('')
      tempResource.milestones = newTemp
      setProjectDetails(tempResource)
      

      let temp = [...milestoneArray]
      temp.push(1)
      setMileStone(temp)
   }

   const removeLastMilestone = (deleteIndex:number) => {
      let temp = {...projectDetails}
      let changeTemp = [...temp.milestones.slice(0, deleteIndex), ...temp.milestones.slice(deleteIndex + 1)]
      temp.milestones = changeTemp
      setProjectDetails(temp)

      let newTemp = [...milestoneArray.slice(0, deleteIndex), ...milestoneArray.slice(deleteIndex + 1)]
      setMileStone(newTemp)
   }

   const addNewKeyDetail = () => {
      let tempResource = {...projectDetails}
      let newTemp = tempResource.keyDetails
      newTemp.push('')
      tempResource.keyDetails = newTemp
      setProjectDetails(tempResource)
      

      let temp = [...keyDetailsArray]
      temp.push(1)
      setKeyDetails(temp)
   }

   const removeLastKeyDetail = (deleteIndex:number) => {
      let temp = {...projectDetails}
      let changeTemp = [...temp.keyDetails.slice(0, deleteIndex), ...temp.keyDetails.slice(deleteIndex + 1)]
      temp.keyDetails = changeTemp
      setProjectDetails(temp)

      // remove select index from resource array
      let newTemp = [...keyDetailsArray.slice(0, deleteIndex), ...keyDetailsArray.slice(deleteIndex + 1)]
      setKeyDetails(newTemp)
   }

   return (
      <section className="px-2 pt-4 pb-6 md:px-4 lg:px-8 rounded-sm w-[100%] flex flex-col gap-4">
         <h1 className="text-lg font-semibold">
            Project Details
         </h1>
         <div className="flex w-[100%] gap-4 md:gap-0 md:gap-y-4 justify-normal md:justify-between flex-wrap">
            <label htmlFor="name" className="text-xs font-medium gap-0 w-[100%] md:w-[48%] flex flex-col"> Project Name
               <input autoFocus type="text" autoComplete="off" onBlur={handleBlur} value={projectDetails?.name} onChange={handleInput} name="name" id="name" className="w-[100%] capitalize px-4 py-2 border-b-2 border-b-gray-200 outline-none text-[16px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
            <label htmlFor="manager" className="text-xs font-medium gap-0 w-[100%] md:w-[48%] flex flex-col"> Project Manager
               <input type="text" autoComplete="off" onBlur={handleBlur} value={projectDetails?.manager} onChange={handleInput} name="manager" id="manager" className="capitalize w-[100%] px-4 py-2 border-b-2 border-b-gray-200 outline-none text-[16px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
         </div>
         <div className="flex w-[100%] gap-y-4 justify-between flex-wrap mt-4">
            <ul className="flex flex-col gap-1 list-inside list-decimal w-[100%] lg:w-[48%]">
               <h2 className="text-xs font-medium">
                  Project Milestones
               </h2>
               {
                  milestoneArray.map((_item: any, index: any) => (
                     <li key={index} className="flex gap-4 items-center">
                        <input type="text" name="text" autoComplete="off" onChange={(event) => handleMilestone(event, index)} onBlur={handleBlur} value={projectDetails.milestones[index]} className="w-[100%] px-4 py-2 border-b-2 border-b-gray-200 outline-none text-[16px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" placeholder={`Milestone ${index + 1}`}/>
                        {
                           (milestoneArray.length > 1) && <MdCancel className="text-red-600 w-4 h-4 cursor-pointer" onClick={() => removeLastMilestone(index)} />
                        }
                     </li>
                  ))
               }
               <button type="button" className='text-xs py-2 px-4 bg-gray-300 rounded-sm font-medium tracking-wider w-fit mt-1' onClick={() => addNewMilestone()}>
                  Add Milestone
               </button>
            </ul>

            <ul className="flex flex-col gap-1 list-inside list-decimal w-[100%] lg:w-[48%]">
               <h2 className="text-xs font-medium">
                  Project Key Details
               </h2>
               {
                  keyDetailsArray.map((_item: any, index: any) => (
                     <li key={index} className="flex gap-4 items-center">
                        <input type="text" name="text" autoComplete="off" onChange={(event) => handleKeyDetail(event, index)} onBlur={handleBlur} value={projectDetails.keyDetails[index]} className="w-[100%] px-4 py-2 border-b-2 border-b-gray-200 outline-none text-[16px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" placeholder={`Detail ${index + 1}`}/>
                        {
                           (keyDetailsArray.length > 1) && <MdCancel className="text-red-600 w-4 h-4 cursor-pointer" onClick={() => removeLastKeyDetail(index)} />
                        }
                     </li>
                  ))
               }
               <button type="button" className='text-xs py-2 px-4 bg-gray-300 rounded-sm font-medium tracking-wider w-fit mt-1' onClick={() => addNewKeyDetail()}>
                  Add Detail
               </button>
            </ul>
         </div>
         <div className="w-[100%] flex gap-y-4 mt-4 justify-between items-center flex-wrap md:flex-nowrap">
            <label htmlFor="status" className="text-xs font-medium gap-0 w-[100%] md:w-[32%] flex flex-col"> Project Status
               <select name="status" id="status" className="w-[100%] px-4 py-2 border-b border-b-gray-200 outline-none text-[12px] focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case capitalize" onChange={handleSelectInput} onBlur={handleSelectInput} value={status}>
                  {
                     projectStatuses.map((item: any) => (
                        <option key={item} value={item} >
                           {item}
                        </option>
                     ))
                  }
               </select>
            </label>
            <label htmlFor="startDate" className="text-xs font-medium gap-0 w-[48%] md:w-[32%] flex flex-col mt-2 md:mt-0"> Start Date
               <input type="date" autoComplete="off" onChange={handleInput}  onBlur={handleBlur} value={projectDetails.startDate} max={projectDetails.endDate} name="startDate" id="startDate" className="w-[100%] px-4 py-2 border-b-2 border-b-gray-200 outline-none text-[12px] appearance-none focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
            <label htmlFor="endDate" className="text-xs font-medium gap-0 w-[48%] md:w-[32%] flex flex-col mt-2 md:mt-0"> Proposed Due Date
               <input type="date" autoComplete="off" onChange={handleInput}  onBlur={handleBlur} min={projectDetails.startDate} value={projectDetails.endDate} name="endDate" id="endDate" className="w-[100%] px-4 py-2 border-b-2 border-b-gray-200 outline-none text-[12px] appearance-none focus:border-black placeholder:text-xs placeholder:text-gray-500 placeholder:normal-case" />
            </label>
         </div>
      </section>
   )
}
