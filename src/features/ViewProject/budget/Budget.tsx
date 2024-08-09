import { useAppSelector } from '../../../app/hooks'
import { selectAllBudgets } from '../ViewProjectSlice'
import BudgetChart from './BudgetChart'
import numberWithCommas from '../../../utils/numberWithCommas'

function Budget() {
   const budget = useAppSelector((state) => selectAllBudgets(state))
   const COLORS = ['#F4A261', '#264653', '#2A9D8F', '#E9C46A', '#E76F51', '#8D99AE', '#D4A5A5'];

   return (
      <div className="w-[100%] lg:w-[45%] gap-8 md:gap-0 py-8 px-2 md:px-4 bg-white rounded-sm border border-white shadow-lg flex flex-wrap items-start md:items-center">
         <div className='w-[100%] md:w-[50%]'>
            <BudgetChart />
         </div>
         <ul className="flex flex-col gap-1 md:px-4">
               {
                  budget[2].resources.map((item, index) => (
                     <div className='flex gap-2 items-center'>
                           <div className='w-2 h-2' style={{ backgroundColor: COLORS[index % COLORS.length] }} ></div>
                           <li 
                              className="font-medium text-xs" 
                              key={item.name}>
                              {item.name}: {budget[2].quantity}{numberWithCommas(item.units)}
                           </li>
                     </div>
                  ))
               }
               <li className="font-semibold mt-4 text-sm" >
                  {`Total amount: ${budget[2].quantity}${numberWithCommas(budget[2].totalBudget)}`}
               </li>
            </ul>
      </div>
   )
   }

export default Budget
