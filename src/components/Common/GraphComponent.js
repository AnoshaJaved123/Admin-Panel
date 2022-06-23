import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
  } from "recharts";




const GraphComponent = () => {


  const data = [
    { name: "Product A", Sales: 400 },
    { name: "Product B", Sales: 300 },
    { name: "Product C", Sales: 600 },
    { name: "Product D", Sales: 400 },
    { name: "Product E", Sales: 300 },
    { name: "Product F", Sales: 600 },
    { name: "Product G", Sales: 400 },
    { name: "Product H", Sales: 300 },

  ];
  return (
    <ResponsiveContainer width={800} height={250}>
    <BarChart
      className="barChart"
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      label="heaf"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Sales" barSize={10} fill="orange" />
    </BarChart>
    
  </ResponsiveContainer>
   
  )
}

export default GraphComponent