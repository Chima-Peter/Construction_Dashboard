import { useAppSelector } from '../../../redux/hooks'
import { selectProjectById } from '../ViewProjectSlice'
import BudgetChart from './BudgetChart'
import numberWithCommas from '../../../utils/numberWithCommas'
import { useContext } from 'react'
import { IdContext } from '../page'

function Budget() {
   const id = useContext(IdContext)
   const budget = useAppSelector((state) => selectProjectById(state, id))
   const COLORS = ['blue', 'lightgreen', 'orange', 'purple', 'red', '#8D99AE', '#D4A5A5']

   const sum = budget?.budget.resources.reduce((start, current) => {
      return start + current.spent
      }, 0);

   return (
      <div className="w-[100%] lg:w-[48%] flex-col py-4 px-4 bg-white rounded-sm border border-gray-200 shadow-lg flex gap-4 lg:gap-0">
         <h2 className="text-lg font-semibold self-start mb-2  md:px-4">
            Budgeting
         </h2>
         <div className='gap-8 md:gap-6 flex w-[100%] flex-col'>
            <div className='w-[100%]'>
               <BudgetChart />
            </div>
            <div className='flex w-[100%] justify-between gap-y-6 md:gap-y-4 flex-wrap lg:flex-nowrap mt-2'>
               <ul className="flex flex-col gap-1 md:px-4 w-[100%] md:w-[48%]">
                  <h3 className="text-xs w-[100%] border-b border-b-gray-300 pb-1 font-semibold mb-1 uppercase">
                     Amount Allocated
                  </h3>
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
                  <li className="font-semibold mt-2 text-xs" >
                     {`Total amount spent: ${budget?.budget.quantity}${numberWithCommas(budget?.budget.totalBudget ?? 0)}`}
                  </li>
               </ul>
               <div className='md:border-r md:border-gray-300'></div>
               <ul className="flex flex-col gap-1 md:px-4 w-[100%] md:w-[48%]">
                  <h3 className="text-xs w-[100%] border-b border-b-gray-300 pb-1 font-semibold mb-1 uppercase">
                     Amount Used
                  </h3>
                  {
                     budget?.budget.resources.map((item:any, index:any) => (
                        <div className='flex gap-2 items-center'  key={item.name}>
                              <div className='w-2 h-2' style={{ backgroundColor: COLORS[index % COLORS.length] }} ></div>
                              <li className="font-medium text-xs">
                                 {item.name}: {budget.budget.quantity}{numberWithCommas(item.spent)}
                              </li>
                        </div>
                     ))
                  }
                  <li className="font-semibold mt-2 text-xs" >
                     {`Total amount allocated: ${budget?.budget.quantity}${numberWithCommas(sum ?? 0)}`}
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
   }

export default Budget
