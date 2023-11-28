

import * as React from "react";
import { LineChart, Line } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 1000,
    amt: 2400
  },
 
  {
    name: "Page B",
    uv: 3000,
    pv: 9000,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 1000,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 10000,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 10000,
    amt: 2181
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 1000,
    amt: 2400
  },
  // {
  //   name: "Page F",
  //   uv: 2390,
  //   pv: 9000,
  //   amt: 2500
  // },
  // {
  //   name: "Page G",
  //   uv: 3490,
  //   pv: 900,
  //   amt: 2100
  // }
];

export default function Charts() {
  return (
    <LineChart width={600} height={150} data={data}>
      <Line type="monotone" dataKey="pv" stroke="#FF5403" strokeWidth={1} />
    </LineChart>
  );
}
