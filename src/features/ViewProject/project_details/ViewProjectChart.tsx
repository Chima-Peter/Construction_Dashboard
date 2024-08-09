import { useState } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { useAppSelector } from '../../../app/hooks';
import { selectAllProjectDetails } from '../ViewProjectSlice';

// Define colors for the pie chart slices
const COLORS = ['#F2994A', 'lightgray'];

// Define the renderActiveShape function for the active slice
const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, value, name } = props;


  return (
    <g>
      <text x={cx} y={cy} dy={-30} textAnchor="middle"  className='font-medium text-5xl' fill='#F2994A'>
        {value}%
      </text>
      <text x={cx} y={cy} dy={-5} textAnchor="middle"  className='font-medium text-sm text-black uppercase' fill='#F2994A'>
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
   const ProjectProgress = useAppSelector(state => selectAllProjectDetails(state))

   const [activeIndex, setActiveIndex] = useState<number>(0);

  // Handle mouse enter event
   const onPieEnter = () => {
      setActiveIndex(0);
   //  console.clear()
   };

   const data = [
      { name: 'completed', value: ProjectProgress[4].progress },
      { name: 'remaining', value: 100 - ProjectProgress[4].progress },
  ];

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
