import { useAppSelector } from '../../../redux/hooks'
import { selectProjectById } from '../ViewProjectSlice'
import BudgetChart from './BudgetChart'
import numberWithCommas from '../../../utils/numberWithCommas'
import { useContext } from 'react'
import { IdContext } from '../page'

function Budget() {
   const id = useContext(IdContext)
   const budget = useAppSelector((state) => selectProjectById(state, id))
   const COLORS = ['blue', 'green', 'orange', 'purple', 'red', '#8D99AE', '#D4A5A5'];

   return (
      <div className="w-[100%] lg:w-[48%] flex-col py-4 px-4 bg-white rounded-sm border border-gray-200 shadow-lg flex gap-4 lg:gap-0">
         <h2 className="text-lg font-semibold self-start mb-2  md:px-4">
            Budgeting
         </h2>
            <div className='gap-8 md:gap-4 flex w-[100%] flex-wrap items-start md:items-center'>
            <div className='w-[100%] md:w-[50%]'>
               <BudgetChart />
            </div>
            <ul className="flex flex-col gap-1 md:px-4">
               {
                  budget?.budget.resources.map((item:any, index:any) => (
                     <div className='flex gap-2 items-center'  key={item.name}>
                           <div className='w-2 h-2' style={{ backgroundColor: COLORS[index % COLORS.length] }} ></div>
                           <li className="font-medium text-xs">
                              {item.name}: {budget.budget.quantity}{numberWithCommas(item.units)}
                           </li>
                     </div>
                  ))
               }
               <li className="font-semibold mt-4 text-sm" >
                  {`Total amount: ${budget?.budget.quantity}${numberWithCommas(budget?.budget.totalBudget ?? 0)}`}
               </li>
            </ul>
         </div>
      </div>
   )
   }

export default Budget
