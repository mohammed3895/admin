"use client";
import React from "react";
import {
  ResponsiveContainer,
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { CustomTooltip } from "./CustomToolTip";
import { CustomLegend } from "./CustomLegend";
import { cn } from "~/lib/utils";

const data = [
  {
    name: "online",
    date: new Date(),
    fill: "#F6CB36",
    sales: 3001,
    sales_2: 2000,
  },
  {
    name: "offilne",
    date: new Date(),
    fill: "#9597D6",
    sales: 2000,
    sales_2: 1000,
  },

  {
    name: "deals",
    date: new Date(),
    fill: "#35CB89",
    sales: 1850,
    sales_2: 3250,
  },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * -11;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={data[index]?.fill}
      textAnchor="middle"
      className={cn("invisible text-lg text-muted-foreground")}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const RadialChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={450} className="relative">
      <PieChart width={400} height={400} barSize={2}>
        <Pie
          data={data}
          dataKey="sales"
          height={300}
          innerRadius={110}
          outerRadius={120}
          labelLine={false}
          label={renderCustomizedLabel}
          strokeLinecap="round"
          fill="#8884d8"
          paddingAngle={1}
          className="relative"
        >
          {data.map((entry, index) => (
            <Cell stroke="5" strokeWidth={1} key={`cell-${index}`} />
          ))}
        </Pie>

        <Legend iconType="circle" iconSize={10} content={<CustomLegend />} />
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RadialChartComponent;
