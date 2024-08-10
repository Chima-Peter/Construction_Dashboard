import { useContext, useState } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { useAppSelector } from '../../../app/hooks';
import { selectProjectById } from '../ViewProjectSlice';
import { IdContext } from '../ViewProject';

// Define colors for the pie chart slices
const COLORS = ['blue', 'lightgray'];

// Define the renderActiveShape function for the active slice
const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, value, name } = props;


  return (
    <g>
      <text x={cx} y={cy} dy={-30} textAnchor="middle"  className='font-medium text-5xl' fill='blue'>
        {value}%
      </text>
      <text x={cx} y={cy} dy={-5} textAnchor="middle"  className='font-medium text-sm text-black uppercase' fill='blue'>
        {name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

export default function ViewProjectChart() {
   const id = useContext(IdContext)
   const ProjectProgress = useAppSelector(state => selectProjectById(state,id))

   const [activeIndex, setActiveIndex] = useState<number>(0);

  // Handle mouse enter event
   const onPieEnter = () => {
      setActiveIndex(0);
   //  console.clear()
   };

   const data = [
      { name: 'completed', value: ProjectProgress?.projectDetails.progress ?? 0 },
      { name: 'remaining', value: 100 - (ProjectProgress?.projectDetails.progress ?? 0) },
  ]

  return (
    <PieChart width={270} height={270}>
      <Pie
        data={data}
        startAngle={180}
        endAngle={0}
        innerRadius={100}
        outerRadius={120}
        fill="#F2994A"
        paddingAngle={0}
        dataKey="value"
        className='outline-none'
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        onMouseEnter={() => {
          // Handle event and index to determine which slice is active
          onPieEnter();
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
