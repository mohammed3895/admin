"use client";
import React from "react";
import {
  ResponsiveContainer,
  type TooltipProps,
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
} from "recharts";
import dayjs from "dayjs";
import {
  type ValueType,
  type NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { CustomTooltip } from "./CustomToolTip";

const data = [
  // {
  //   date: new Date(),
  //   fill: "#fef12e",
  //   sales: 2000,
  //   sales_2: 1500,
  // },
  // {
  //   date: new Date(),
  //   fill: "#fef12e",
  //   sales: 2354,
  //   sales_2: 3100,
  // },
  {
    date: new Date(),
    fill: "#FF808A",
    sales: 3001,
    sales_2: 2000,
  },
  {
    date: new Date(),
    fill: "#9597D6",
    sales: 2000,
    sales_2: 1000,
  },

  {
    date: new Date(),
    fill: "#35CB89",
    sales: 1850,
    sales_2: 3250,
  },
  {
    date: new Date(),
    fill: "#5E81F4",
    sales: 2230,
    sales_2: 2230,
  },
];
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const RadialChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300} className="relative">
      <RadialBarChart
        width={400}
        height={200}
        data={data}
        // startAngle={360}
        // endAngle={30}
        barGap={8}
        barSize={16}
      >
        <RadialBar
          dataKey="sales"
          height={300}
          fillRule="evenodd"
          radius={20}
          strokeLinecap="round"
          strokeLinejoin="round"
          stitchTiles={20}
          cornerRadius={20}
        />
        <Legend
          type="round"
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
        <Tooltip content={<CustomTooltip />} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialChartComponent;
