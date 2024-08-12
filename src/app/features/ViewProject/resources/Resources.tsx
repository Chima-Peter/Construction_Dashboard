import { useContext } from "react"
import { useAppSelector } from "../../../redux/hooks" 
import numberWithCommas from "../../../utils/numberWithCommas"
import { selectProjectById } from "../ViewProjectSlice"
import ResourcesChart from "./ResourcesChart"
import { IdContext } from "../page"

function Resources() {
   const id = useContext(IdContext)
   let resources = useAppSelector(state => selectProjectById(state, id))

   return (
      <div className="w-[100%] lg:w-[48%] py-8 px-4 bg-white rounded-sm border border-gray-200 shadow-lg flex flex-wrap gap-4 lg:gap-0">
         <h2 className="text-lg font-semibold self-start mb-4  md:px-4">
            Resources
         </h2>
         <ResourcesChart />
         <div className="flex w-[100%] justify-between gap-y-4 flex-wrap lg:flex-nowrap mt-2">
            <ul className="flex flex-col gap-1 list-inside list-disc md:px-4 w-[100%] md:w-[48%]">
               <div className="flex items-center gap-1 pb-1 mb-1 border-b border-b-gray-300  ">
                  <span className="w-[10px] h-[10px] bg-[lightgreen]"></span>
                  <h3 className="text-xs w-[100%] font-semibold uppercase">
                     Resources Allocated
                  </h3>
               </div>
               {
                  resources?.resources.map((item:any) => (
                     <li className="font-medium text-xs" key={item.name}>
                        {item.name}: {numberWithCommas(item.units)} {item.quantity}
                     </li>
                  ))
               }
            </ul>
            <div className="md:border-r md border-r-gray-300">
            </div>
            <ul className="flex flex-col gap-1 list-inside list-disc md:px-4 w-[100%] md:w-[48%]">
               <div className="border-b border-b-gray-300 flex gap-1 items-center pb-1 mb-1">
                  <span className="w-[10px] h-[10px] bg-[red]"></span>
                  <h3 className="text-xs w-[100%] font-semibold uppercase">
                     Resources Used
                  </h3>
               </div>
               {
                  resources?.resources.map((item:any) => (
                     <li className="font-medium text-xs" key={item.name}>
                        {item.name}: {numberWithCommas(item.spent)} {item.quantity}
                     </li>
                  ))
               }
            </ul>
         </div>
      </div>
   )
}

export default Resources
