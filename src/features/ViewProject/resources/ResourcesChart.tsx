import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, XAxis } from 'recharts';
import { useAppSelector } from '../../../app/hooks';
import { selectProjectById } from '../ViewProjectSlice';
import { useContext } from 'react';
import { IdContext } from '../ViewProject';


const renderCustomBarLabel = ({ x, y, width, value }: any) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6} className='text-xs text-[#2A3A5F]'>{`${value}`}</text>;
};

function CustomTooltip({ payload, active }: any) {
  if (active) {
    return (
      <div className="bg-green-700 w-[100%] p-2 rounded-sm">
        <p className="text-xs text-white font-medium">
            {`${payload[0].payload.name} : ${payload[0].value} ${payload[0].payload.quantity}`}
         </p>
      </div>
    );
  }

  return null;
}

export default function ResourcesChart() {
   const id = useContext(IdContext)
  let resources = useAppSelector(state => selectProjectById(state, id));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={resources?.resources}>
        <YAxis className='text-xs text-green-700' />
        <XAxis className='text-xs text-green-700' />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="units" fill="green" barSize={15} label={renderCustomBarLabel} />
      </BarChart>
    </ResponsiveContainer>
  );
}
