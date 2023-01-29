import { Container } from '@mantine/core';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from './AttendenceData';

const AttendenceChart = () => {
  // static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  return (
    <BarChart
      width={800}
      height={500}
      data={data}
      // layout="radial"
      margin={{
        top: 5,
        // right: 30,
        left: 20,
        bottom: 5,
      }}
      // compact={true}
      // barSize= {5}
      // innerRadius= {10}
      // barGap= {0}
    >
      <CartesianGrid strokeDasharray="6 6" />
      <XAxis dataKey="name" stroke="#008080" />
      <YAxis stroke="#008080" />
      <Tooltip />
      <Legend  />
      <Bar radius={5} dataKey="Present" fill="#fa5252" />
      <Bar radius={5} dataKey="Absent" fill="#40c057" />
    </BarChart>
  );
};

export default AttendenceChart;
