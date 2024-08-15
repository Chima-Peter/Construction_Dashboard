import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, XAxis } from 'recharts';
import { selectProjectById } from '../ViewProjectSlice';
import { useSearchContext } from '../page';
import { useAppSelector } from "../../../redux/hooks" 

const renderCustomBarLabel = ({ x, y, width, value }: any) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6} className='text-[10px] text-[#2A3A5F]'>{`${value}`}</text>;
};

function CustomTooltip({ payload, active }: any) {
  if (active) {
    return (
      <div className="bg-green-700 w-[100%] p-2 rounded-sm flex flex-col gap-1">
        <p className='text-sm font-semibold text-white tracking-wider uppercase'>
            {`${payload[0].payload.name}`}:
        </p>
        <div>
            <p className="text-xs text-white font-medium">
               Allocated: {`${payload[0].value} ${payload[0].payload.quantity}`}
            </p>
            <p className="text-xs text-white font-medium">
               Used: {`${payload[1].value} ${payload[0].payload.quantity}`}
            </p>
        </div>
      </div>
    );
  }

  return null;
}

export default function ResourcesChart() {
   const { id } = useSearchContext()
  let resource = useAppSelector(state => selectProjectById(state, id));

  const data: any[] | undefined = []

   resource?.resources.map((item) => {
      data.push({ 'name': item.name, 'units': Number(item.units), 'spent': Number(item.spent), 'quantity': item.quantity })
   })

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} barGap={5}>
        <YAxis className='text-xs text-green-700' />
        <XAxis className='text-xs text-green-700' />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="units" fill="lightgreen" barSize={10} label={renderCustomBarLabel} />
        <Bar dataKey="spent" fill="red" barSize={10} label={renderCustomBarLabel} />
      </BarChart>
    </ResponsiveContainer>
  );
}
