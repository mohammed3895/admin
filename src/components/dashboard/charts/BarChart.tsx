"use client";
import React, { useState } from "react";
import {
  ResponsiveContainer,
  XAxis,
  Tooltip,
  type TooltipProps,
  Bar,
  BarChart,
} from "recharts";
import dayjs from "dayjs";
import {
  type ValueType,
  type NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { CustomTooltip } from "./CustomToolTip";

const data = [
  {
    date: new Date(),
    sales: 1000,
    sales_2: 1500,
  },
  {
    date: new Date(),
    sales: 2354,
    sales_2: 3100,
  },
  {
    date: new Date(),
    sales: 3001,
    sales_2: 2000,
  },
  {
    date: new Date(),
    sales: 2000,
    sales_2: 1000,
  },
  {
    date: new Date(),
    sales: 2314,
    sales_2: 1570,
  },
  {
    date: new Date(),
    sales: 2354,
    sales_2: 2140,
  },
  {
    date: new Date(),
    sales: 1250,
    sales_2: 3250,
  },
  {
    date: new Date(),
    sales: 4230,
    sales_2: 2230,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={450} className="m-0 p-0">
      <BarChart
        data={data}
        barGap={5}
        barCategoryGap={5}
        stackOffset="positive"
        className="m-0 p-0"
        margin={{ top: 12, left: 6, right: 6 }}
      >
        <Bar
          dataKey="sales"
          fill="#35CB89"
          className="mb-6 px-0"
          stackId="stack"
          strokeWidth={5}
          type="stack"
          radius={12}
          barSize={14}
          background={{
            fill: "transparent",
          }}
          style={{ transform: "translate(0, 10px)" }}
        />
        <Bar
          dataKey="sales_2"
          fill="#5E81F4"
          className="m-0 w-[15px] px-0"
          stackId="stack"
          strokeWidth={5}
          type="stack"
          radius={15}
          barSize={14}
          background={{
            fill: "transparent",
          }}
        />
        <XAxis
          dataKey="date"
          tickFormatter={() => dayjs().format("MMM DD")}
          className="mt-2.5 text-xs"
          tickLine={false}
          tickCount={6}
          axisLine={false}
          tickMargin={14}
        />
        {/* <YAxis /> */}

        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
