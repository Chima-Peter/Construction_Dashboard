import { useContext } from "react"
import { useAppSelector } from "../../../app/hooks"
import numberWithCommas from "../../../utils/numberWithCommas"
import { selectProjectById } from "../ViewProjectSlice"
import ResourcesChart from "./ResourcesChart"
import { IdContext } from "../ViewProject"

function Resources() {
   const id = useContext(IdContext)
   let resources = useAppSelector(state => selectProjectById(state, id))

   return (
      <div className="w-[100%] lg:w-[48%] py-8 px-4 bg-white rounded-sm border border-gray-200 shadow-lg flex flex-wrap gap-4 lg:gap-0">
         <h2 className="text-lg font-semibold self-start mb-4  md:px-4">
            Resources Allocated
         </h2>
         <ResourcesChart />
         <ul className="flex flex-col gap-1 list-inside list-disc md:px-4">
            {
               resources?.resources.map(item => (
                  <li className="font-medium text-xs" key={item.name}>
                     {item.name}: {numberWithCommas(item.units)} {item.quantity}
                  </li>
               ))
            }
         </ul>
      </div>
   )
}

export default Resources
