import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, XAxis } from 'recharts';
import { useAppSelector } from '../../../app/hooks';
import { selectAllResources } from '../ViewProjectSlice';


const renderCustomBarLabel = ({ x, y, width, value }: any) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6} className='text-xs text-[#2A3A5F]'>{`${value}`}</text>;
};

function CustomTooltip({ payload, active }: any) {
  if (active) {
    return (
      <div className="bg-[#2A3A5F] w-[100%] p-2 rounded-sm">
        <p className="text-xs text-white font-medium">
            {`${payload[0].payload.name} : ${payload[0].value} ${payload[0].payload.quantity}`}
         </p>
      </div>
    );
  }

  return null;
}

export default function ResourcesChart() {
  let resources = useAppSelector(state => selectAllResources(state));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={resources[2]}>
        <YAxis className='text-xs text-[#2A3A5F]' />
        <XAxis className='text-xs text-[#2A3A5F]' />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="units" fill="#2A3A5F" barSize={10} label={renderCustomBarLabel} />
      </BarChart>
    </ResponsiveContainer>
  );
}
