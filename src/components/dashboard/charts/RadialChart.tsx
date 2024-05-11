"use client";
import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  Label,
  LabelList,
} from "recharts";
import { CustomTooltip } from "./CustomToolTip";
import { type Payload } from "recharts/types/component/DefaultLegendContent";

const data = [
  {
    name: "online",
    date: new Date(),
    fill: "#FF808A",
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

interface props {
  payload?: Payload[];
}

export const CustomLegend = (props: props) => {
  const { payload } = props;

  return (
    <div className="flex w-full items-center justify-between border-t border-dashed pt-3.5">
      {payload?.map((entry, i) => (
        <div
          className="flex h-full w-full items-center justify-center gap-1.5"
          key={i}
        >
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <h2 className="text-base font-normal capitalize tracking-tight text-black-1">
            {entry.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

const RadialChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={320} className="relative">
      <RadialBarChart
        width={400}
        height={400}
        data={data}
        innerRadius={60}
        outerRadius={120}
        cy="40%"
        startAngle={0}
        endAngle={360}
        barSize={10}
        barGap={10}
        margin={{ bottom: 0 }}
      >
        <RadialBar
          dataKey="sales"
          height={300}
          fillRule="nonzero"
          type="stack"
          background
          radius={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          stitchTiles={10}
          stackId="stack"
          cornerRadius={10}
          className="relative"
        />

        <Legend iconType="circle" iconSize={10} content={<CustomLegend />} />
        <Tooltip content={<CustomTooltip />} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialChartComponent;
