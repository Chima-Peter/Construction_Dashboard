import { useAppSelector } from "../../../redux/hooks" 
import { selectProjectById } from "../ViewProjectSlice"
import ViewProjectChart from "./ViewProjectChart"
import { useSearchContext } from "../page"


function ProjectDetails() {
   const { id } = useSearchContext()
   const ProjectDetailsSelector = useAppSelector((state) => selectProjectById(state, id))

   return (
      <section className="flex gap-4 px-2 md:px-4 lg:px-8 flex-wrap w-[100%] justify-normal lg:justify-between">
         <div className="py-4 self-center px-8 bg-white border border-gray-200 items-center rounded-sm shadow-lg w-[100%] lg:w-[48%] h-[290px] lg:h-full flex flex-col gap-3 lg:gap-0">
            <h1 className="text-lg font-semibold self-start">
               Overview
            </h1>
            <ViewProjectChart />
            <ul className="flex translate-y-[-110px] md:translate-y-[-90px] lg:translate-y-[-70px] self-start items-start gap-4 flex-wrap">
               <li className="flex gap-1 items-center">
                  <div className="w-2 h-2 bg-blue-700"></div>
                  <p className="text-[10px] font-medium tracking-wider">
                     Percentage completed
                  </p>
               </li>
               <li className="flex gap-1 items-center">
                  <div className="w-2 h-2 bg-gray-400"></div>
                  <p className="text-[10px] font-medium tracking-wider">
                     Percentage remaining
                  </p>
               </li>
            </ul>
         </div>
         <div className="p-4 bg-white border border-gray-200 rounded-sm shadow-lg w-[100%] lg:w-[48%] flex flex-col gap-3">
            <h1 className="text-lg font-semibold">
               Project Details
            </h1>
            <div className="flex gap-5 mb-4">
               <div className="flex flex-col gap-1">
                  <h2 className="text-xs font-light">
                     Project Name:
                  </h2>
                  <h2 className="text-xs font-light">
                     Project Manager:
                  </h2>
                  <h2 className="text-xs font-light mb-2">
                     Status:
                  </h2>
                  <p className="text-xs font-light">
                     Start Date:
                  </p>
                  <p className="text-xs font-light">
                     Proposed Due Date:
                  </p>
               </div>
               <div  className="flex flex-col gap-1">
                  <h2 className="text-xs font-semibold tracking-wider uppercase">
                     {ProjectDetailsSelector?.projectDetails.name}
                  </h2>
                  <h2 className="text-xs font-semibold tracking-wider capitalize">
                  {ProjectDetailsSelector?.projectDetails.manager}
                  </h2>
                  <h2  className="text-xs font-medium capitalize mb-2">
                  {ProjectDetailsSelector?.status}
                  </h2>
                  <p className="text-xs font-medium tracking-tight italic">
                     {ProjectDetailsSelector?.projectDetails.startDate}
                  </p>
                  <p className="text-xs font-medium tracking-tight italic">
                  {ProjectDetailsSelector?.projectDetails.endDate}
                  </p>
               </div>
            </div>
            <div className="flex gap-6 lg:gap-0 flex-wrap md:flex-nowrap justify-normal md:justify-between">
               <ul className="flex flex-col gap-1 list-inside list-disc w-[100%] md:w-[48%]">
                  <h2 className="text-[lg] font-semibold self-start border-b p-1 border-b-gray-400 w-[100%]">
                     Milestones
                  </h2>
                  {
                     ProjectDetailsSelector?.projectDetails.milestones.map((item:any) => (
                        <li className="font-medium text-xs" key={item}>
                           {item}
                        </li>
                     ))
                  }
               </ul>
               <div className=" md:border-r md:border-r-gray-400">
               </div>
               <ul className="flex flex-col gap-1 list-inside list-disc w-[100%] md:w-[48%]">
                  <h2 className="text-[lg] font-semibold self-start border-b p-1 border-b-gray-400 w-[100%]">
                     Key Details
                  </h2>
                  {
                     ProjectDetailsSelector?.projectDetails.keyDetails.map((item:any) => (
                        <li className="font-medium text-xs" key={item}>
                           {item}
                        </li>
                     ))
                  }
               </ul>
            </div>
         </div>
      </section>
   )
}

export default ProjectDetails
