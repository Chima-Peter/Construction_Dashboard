import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { selectProjectById } from "../ViewProjectSlice";
import { useSearchContext } from "../page";
import { useAppSelector } from "../../../redux/hooks" 
import numberWithCommas from "../../../utils/numberWithCommas"
import removeCommas from "../../../utils/removeCommas";

const COLORS = ['blue', 'lightgreen', 'orange', 'purple', 'red', '#8D99AE', '#D4A5A5'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}: any) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);

   return (
      <text
         x={x}
         y={y}
         fill="white"
         textAnchor={x > cx ? "start" : "end"}
         dominantBaseline="central"
         className="text-[11px] font-medium"
      >
         {`${(percent * 100).toFixed(0)}%`}
      </text>
   );
};



const BudgetChart = () => {
   const { id } = useSearchContext()
   const budget = useAppSelector((state) => selectProjectById(state, id))


   function CustomTooltip({ payload, active }: any) {
      if (active) {
         return (
            <div className="bg-white w-[100%] p-2 rounded-sm shadow-lg">
            <p className="text-xs text-inherit font-medium">
                  {`${payload[0].payload.name} : ${budget?.budget.quantity}${numberWithCommas(payload[0].value)}`}
               </p>
            </div>
         );
      }
      }
      const data: any[] | undefined = []

      budget?.budget.resources.map((item) => {
         data.push({ 'name': item.name, 'units': Number(removeCommas(item.units))})
      })
 
    return (
      <ResponsiveContainer width="100%" height={200}>
         <PieChart>
            <Pie
               data={data}
               labelLine={false}
               label={renderCustomizedLabel}
               outerRadius={100}
               paddingAngle={0}
               className="outline-none border-0"
               fill="#F2994A"
               dataKey="units"
            >
               {budget?.budget.resources.map((entry:any, index:any) => (
               <Cell key={`cell-${index}-${entry}`} fill={COLORS[index % COLORS.length]} />
               ))}
            </Pie>
            <Tooltip content={CustomTooltip} />
         </PieChart>
      </ResponsiveContainer>
    )
}
 
export default BudgetChart;