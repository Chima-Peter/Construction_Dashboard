import { useAppSelector } from "../../../app/hooks"
import numberWithCommas from "../../../utils/numberWithCommas"
import { selectAllResources } from "../ViewProjectSlice"
import ResourcesChart from "./ResourcesChart"

function Resources() {
   let resources = useAppSelector(state => selectAllResources(state))

   return (
      <div className="w-[100%] lg:w-[45%] py-8 px-2 md:px-4 bg-white rounded-sm border border-white shadow-lg flex flex-wrap gap-4">
         <ResourcesChart />
         <ul className="flex flex-col gap-1 list-inside list-disc md:px-4">
            {
               resources[2].map(item => (
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
