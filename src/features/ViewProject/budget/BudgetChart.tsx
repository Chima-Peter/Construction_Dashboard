import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useAppSelector } from "../../../app/hooks";
import { selectAllBudgets } from "../ViewProjectSlice";
import numberWithCommas from "../../../utils/numberWithCommas";


const COLORS = ['blue', 'green', 'orange', 'purple', 'red', '#8D99AE', '#D4A5A5'];

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
      >
         {`${(percent * 100).toFixed(0)}%`}
      </text>
   );
};



const BudgetChart = () => {
   const budget = useAppSelector((state) => selectAllBudgets(state))


   function CustomTooltip({ payload, active }: any) {
      if (active) {
         return (
            <div className="bg-white w-[100%] p-2 rounded-sm shadow-lg">
            <p className="text-xs text-inherit font-medium">
                  {`${payload[0].payload.name} : ${budget[2].quantity}${numberWithCommas(payload[0].value)}`}
               </p>
            </div>
         );
      }
      }
 
    return (
      <ResponsiveContainer width="100%" height={200}>
         <PieChart>
            <Pie
               data={budget[2].resources}
               labelLine={false}
               label={renderCustomizedLabel}
               outerRadius={100}
               paddingAngle={0}
               className="outline-none border-0"
               fill="#F2994A"
               dataKey="units"
            >
               {budget[2].resources.map((entry, index) => (
               <Cell key={`cell-${index}-${entry}`} fill={COLORS[index % COLORS.length]} />
               ))}
            </Pie>
            <Tooltip content={CustomTooltip} />
         </PieChart>
      </ResponsiveContainer>
    )
}
 
export default BudgetChart;